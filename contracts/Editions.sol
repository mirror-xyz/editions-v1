// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

import {ERC721} from "./ERC721.sol";
import {IERC721} from "./ERC721.sol";

import {console} from "hardhat/console.sol";

contract Editions is ERC721 {
    // Editions start at 1, so that unsold tokens don't map to the first edition.
    uint256 private nextEditionId = 1;
    uint256 private nextTokenId;

    string public constant name = "Mirror Editions";
    string public constant symbol = "EDITIONS";

    string internal baseURI;

    struct Edition {
        uint256 quantity;
        uint256 price;
        address payable fundingRecipient;
        uint256 numSold;
    }

    mapping(uint256 => Edition) public editions;
    mapping(uint256 => uint256) private tokenToEdition;

    constructor(string memory baseURI_) {
        baseURI = baseURI_;
    }

    event EditionCreated(
        uint256 quantity,
        uint256 price,
        address fundingRecipient,
        uint256 editionId
    );

    event EditionPurchased(
        uint256 editionId,
        uint256 tokenId,
        uint256 numSold,
        address buyer
    );

    function createEdition(
        uint256 quantity,
        uint256 price,
        address payable fundingRecipient
    ) public returns (uint256) {
        editions[nextEditionId] = Edition({
            quantity: quantity,
            price: price,
            fundingRecipient: fundingRecipient,
            numSold: 0
        });

        emit EditionCreated(quantity, price, fundingRecipient, nextEditionId);

        nextEditionId += 1;

        return nextEditionId - 1;
    }

    function buyEdition(uint256 editionId) external payable {
        require(
            msg.value >= editions[editionId].price,
            "Must send enough to purchase the edition."
        );

        require(editions[editionId].quantity > 0, "Edition does not exist");

        editions[editionId].numSold = editions[editionId].numSold + 1;

        require(
            editions[editionId].numSold <= editions[editionId].quantity,
            "This edition is already sold out."
        );

        _mint(msg.sender, nextTokenId);
        tokenToEdition[nextTokenId] = editionId;

        emit EditionPurchased(
            editionId,
            nextTokenId,
            editions[editionId].numSold,
            msg.sender
        );

        nextTokenId++;
    }

    function withdrawFunds(uint256 editionId) external {
        _sendFunds(
            editions[editionId].fundingRecipient,
            editions[editionId].price * editions[editionId].numSold
        );
    }

    // Returns e.g. https://nft.mirror.xyz/[editionId]/[tokenId]
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        // If the token does not map to an edition, it'll be 0.
        require(tokenToEdition[tokenId] > 0, "Token has not been sold yet");

        return
            string(
                abi.encodePacked(
                    "https://mirror-api.com/",
                    _toString(tokenToEdition[tokenId]),
                    "/",
                    _toString(tokenId)
                )
            );
    }

    function _sendFunds(address payable recipient, uint256 amount) private {
        require(
            address(this).balance >= amount,
            "Address: insufficient balance"
        );

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Unable to send value: recipient may have reverted");
    }

    // From https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol
    function _toString(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
