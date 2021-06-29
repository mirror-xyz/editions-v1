// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

import {ERC721} from "./ERC721.sol";

/**
 * @title Editions
 * @author MirrorXYZ
 */
contract Editions is ERC721 {
    // ============ Constants ============

    string public constant name = "Mirror Editions";
    string public constant symbol = "EDITIONS";

    // ============ Structs ============

    struct Edition {
        // The maximum number of tokens that can be sold.
        uint256 quantity;
        // The price at which each token will be sold, in ETH.
        uint256 price;
        // The account that will receive sales revenue.
        address payable fundingRecipient;
        // The number of tokens sold so far.
        uint256 numSold;
    }

    // ============ Immutable Storage ============

    // The URI for the API that serves the content for each token.
    // Note: Strings cannot be literally immutable.
    string internal baseURI;

    // ============ Mutable Storage ============

    // Mapping of edition id to descriptive data.
    mapping(uint256 => Edition) public editions;
    // Mapping of token id to edition id.
    mapping(uint256 => uint256) public tokenToEdition;
    // The amount of funds that have already been withdrawn for a given edition.
    mapping(uint256 => uint256) public withdrawnForEdition;
    // `nextTokenId` increments with each token purchased, globally across all editions.
    uint256 private nextTokenId;
    // Editions start at 1, in order that unsold tokens don't map to the first edition.
    uint256 private nextEditionId = 1;

    // ============ Events ============

    event EditionCreated(
        uint256 quantity,
        uint256 price,
        address fundingRecipient,
        uint256 indexed editionId
    );

    event EditionPurchased(
        uint256 indexed editionId,
        uint256 indexed tokenId,
        // `numSold` at time of purchase represents the "serial number" of the NFT.
        uint256 numSold,
        // The account that paid for and received the NFT.
        address indexed buyer
    );

    // ============ Constructor ============

    constructor(string memory baseURI_) {
        baseURI = baseURI_;
    }

    // ============ Edition Methods ============

    function createEdition(
        // The number of tokens that can be minted and sold.
        uint256 quantity,
        // The price to purchase a token.
        uint256 price,
        // The account that should receive the revenue.
        address payable fundingRecipient
    ) external {
        editions[nextEditionId] = Edition({
            quantity: quantity,
            price: price,
            fundingRecipient: fundingRecipient,
            numSold: 0
        });

        emit EditionCreated(quantity, price, fundingRecipient, nextEditionId);

        nextEditionId++;
    }

    function buyEdition(uint256 editionId) external payable {
        // Check that the edition exists. Note: this is redundant
        // with the next check, but it is useful for clearer error messaging.
        require(editions[editionId].quantity > 0, "Edition does not exist");
        // Check that there are still tokens available to purchase.
        require(
            editions[editionId].numSold < editions[editionId].quantity,
            "This edition is already sold out."
        );
        // Check that the sender is paying the correct amount.
        require(
            msg.value == editions[editionId].price,
            "Must send enough to purchase the edition."
        );
        // Increment the number of tokens sold for this edition.
        editions[editionId].numSold++;
        // Mint a new token for the sender, using the `nextTokenId`.
        _mint(msg.sender, nextTokenId);
        // Store the mapping of token id to the edition being purchased.
        tokenToEdition[nextTokenId] = editionId;

        emit EditionPurchased(
            editionId,
            nextTokenId,
            editions[editionId].numSold,
            msg.sender
        );

        nextTokenId++;
    }

    // ============ Operational Methods ============

    function withdrawFunds(uint256 editionId) external {
        // Compute the amount available for withdrawing from this edition.
        uint256 remainingForEdition =
            // Compute total amount of revenue that has been generated for the edition so far.
            (editions[editionId].price * editions[editionId].numSold) -
                // Subtract the amount that has already been withdrawn.
                withdrawnForEdition[editionId];

        // Update that amount that has already been withdrawn for the edition.
        withdrawnForEdition[editionId] += remainingForEdition;
        // Send the amount that was remaining for the edition, to the funding recipient.
        _sendFunds(editions[editionId].fundingRecipient, remainingForEdition);
    }

    // ============ NFT Methods ============

    // Returns e.g. https://mirror-api.com/editions/[editionId]/[tokenId]
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        // If the token does not map to an edition, it'll be 0.
        require(tokenToEdition[tokenId] > 0, "Token has not been sold yet");
        // Concatenate the components, baseURI, editionId and tokenId, to create URI.
        return
            string(
                abi.encodePacked(
                    baseURI,
                    _toString(tokenToEdition[tokenId]),
                    "/",
                    _toString(tokenId)
                )
            );
    }

    // Returns e.g. https://mirror-api.com/editions/metadata
    function contractURI() public view returns (string memory) {
        // Concatenate the components, baseURI, editionId and tokenId, to create URI.
        return string(abi.encodePacked(baseURI, "metadata"));
    }

    // ============ Private Methods ============

    function _sendFunds(address payable recipient, uint256 amount) private {
        require(
            address(this).balance >= amount,
            "Insufficient balance for send"
        );

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
