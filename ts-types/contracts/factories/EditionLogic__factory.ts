/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EditionLogic } from "../EditionLogic";

export class EditionLogic__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EditionLogic> {
    return super.deploy(overrides || {}) as Promise<EditionLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EditionLogic {
    return super.attach(address) as EditionLogic;
  }
  connect(signer: Signer): EditionLogic__factory {
    return super.connect(signer) as EditionLogic__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EditionLogic {
    return new Contract(address, _abi, signerOrProvider) as EditionLogic;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fundingRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
    ],
    name: "EditionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "addProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approveViaProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
    ],
    name: "buyEdition",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "fundingRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    name: "createEdition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "editions",
    outputs: [
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "fundingRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numSold",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFromViaProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFromViaProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "editionId",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506121ee806100206000396000f3fe6080604052600436106101805760003560e01c80636352211e116100d6578063c45a01551161007f578063d270c73e11610059578063d270c73e1461049a578063d90f03f9146104ba578063e985e9c5146104da57600080fd5b8063c45a01551461043a578063c87b56dd1461045a578063cacc24eb1461047a57600080fd5b806395d89b41116100b057806395d89b41146103e5578063a22cb465146103fa578063b88d4fde1461041a57600080fd5b80636352211e1461037757806370a082311461039757806380a5cca3146103c557600080fd5b8063121e498411610138578063279c806e11610112578063279c806e146102a957806342842e0e146103375780635bb478081461035757600080fd5b8063121e498414610256578063155dd5ee1461026957806323b872dd1461028957600080fd5b806306fdde031161016957806306fdde03146101dc578063081812fc146101fe578063095ea7b31461023657600080fd5b806301ffc9a714610185578063031bb1e1146101ba575b600080fd5b34801561019157600080fd5b506101a56101a0366004611f0c565b610523565b60405190151581526020015b60405180910390f35b3480156101c657600080fd5b506101da6101d5366004611e72565b610608565b005b3480156101e857600080fd5b506101f16106c8565b6040516101b19190612078565b34801561020a57600080fd5b5061021e610219366004611f44565b610769565b6040516001600160a01b0390911681526020016101b1565b34801561024257600080fd5b506101da610251366004611ee3565b61080f565b6101da610264366004611f5c565b61095f565b34801561027557600080fd5b506101da610284366004611f44565b610ad3565b34801561029557600080fd5b506101da6102a4366004611d84565b610b11565b3480156102b557600080fd5b506103006102c4366004611f44565b600760205260009081526040902080546001820154600283015460038401546004909401546001600160a01b0393841694929391929091169085565b604080516001600160a01b03968716815260208101959095528401929092529092166060820152608081019190915260a0016101b1565b34801561034357600080fd5b506101da610352366004611d84565b610b98565b34801561036357600080fd5b506101da610372366004611cee565b610bb3565b34801561038357600080fd5b5061021e610392366004611f44565b610c3b565b3480156103a357600080fd5b506103b76103b2366004611cee565b610cc6565b6040519081526020016101b1565b3480156103d157600080fd5b506101da6103e0366004611d84565b610d60565b3480156103f157600080fd5b506101f1610eaa565b34801561040657600080fd5b506101da610415366004611e38565b610ecb565b34801561042657600080fd5b506101da610435366004611dbf565b610fae565b34801561044657600080fd5b5060065461021e906001600160a01b031681565b34801561046657600080fd5b506101f1610475366004611f44565b61103c565b34801561048657600080fd5b506101da610495366004611d3a565b6110aa565b3480156104a657600080fd5b506103b76104b5366004611f7e565b6111a4565b3480156104c657600080fd5b506101da6104d5366004611d3a565b611329565b3480156104e657600080fd5b506101a56104f5366004611d08565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806105b657507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061060257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6006546001600160a01b031633146106675760405162461bcd60e51b815260206004820152601260248201527f53656e646572206e6f7420666163746f7279000000000000000000000000000060448201526064015b60405180910390fd5b60408051808201825283815260208082018490526001600160a01b0386166000908152600982529290922081518051929391926106a79284920190611b9d565b5060208281015180516106c09260018501920190611b9d565b505050505050565b3360009081526009602052604090208054606091906106e690612123565b80601f016020809104026020016040519081016040528092919081815260200182805461071290612123565b801561075f5780601f106107345761010080835404028352916020019161075f565b820191906000526020600020905b81548152906001019060200180831161074257829003601f168201915b5050505050905090565b6000818152602081905260408120546001600160a01b03166107f35760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161065e565b506000908152600260205260409020546001600160a01b031690565b600061081a82610c3b565b9050806001600160a01b0316836001600160a01b031614156108a45760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161065e565b336001600160a01b03821614806108de57506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6109505760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161065e565b61095a8383611433565b505050565b60008281526007602052604090206004015461097c90600161208b565b6000838152600760205260409020600481019190915560020154341015610a0b5760405162461bcd60e51b815260206004820152602960248201527f4d7573742073656e6420656e6f75676820746f2070757263686173652074686560448201527f2065646974696f6e2e0000000000000000000000000000000000000000000000606482015260840161065e565b6000828152600760205260409020600181015460049091015410610a975760405162461bcd60e51b815260206004820152602160248201527f546869732065646974696f6e20697320616c726561647920736f6c64206f757460448201527f2e00000000000000000000000000000000000000000000000000000000000000606482015260840161065e565b610aa3816005546114ae565b60058054600090815260086020526040812084905581546001929190610aca90849061208b565b90915550505050565b600081815260076020526040902060038101546004820154600290920154610b0e926001600160a01b0390921691610b0a916120a3565b5050565b50565b610b1b33826115ff565b610b8d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161065e565b61095a838383611703565b61095a83838360405180602001604052806000815250610fae565b6006546001600160a01b031615610c0c5760405162461bcd60e51b815260206004820152601360248201527f466163746f727920616c72656164792073657400000000000000000000000000604482015260640161065e565b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000818152602081905260408120546001600160a01b0316806106025760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161065e565b60006001600160a01b038216610d445760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161065e565b506001600160a01b031660009081526001602052604090205490565b600081815260086020908152604080832054835260079091529020546001600160a01b03163314610dd35760405162461bcd60e51b815260206004820152601460248201527f6d73672e73656e646572206e6f742070726f7879000000000000000000000000604482015260640161065e565b610ddc81610c3b565b6001600160a01b0316836001600160a01b031614610e625760405162461bcd60e51b815260206004820152602260248201527f4552433732313a2063616c6c6572206e6f742070726f78792c206f72206f776e60448201527f6572000000000000000000000000000000000000000000000000000000000000606482015260840161065e565b610ea06040518060400160405280600a81526020017f417070726f76696e6721000000000000000000000000000000000000000000008152506118e1565b61095a8282611433565b3360009081526009602052604090206001018054606091906106e690612123565b6001600160a01b038216331415610f245760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161065e565b3360008181526003602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610fb833836115ff565b61102a5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161065e565b61103684848484611952565b50505050565b604080518082018252601781527f68747470733a2f2f6e66742e6d6972726f722e78797a2f000000000000000000602080830191909152600084815260088252839020549251606093611093928492879101611fef565b604051602081830303815290604052915050919050565b600081815260086020908152604080832054835260079091529020546001600160a01b0316331461111d5760405162461bcd60e51b815260206004820152601460248201527f6d73672e73656e646572206e6f742070726f7879000000000000000000000000604482015260640161065e565b61112784826115ff565b6111995760405162461bcd60e51b815260206004820152602a60248201527f6073656e646572602061646472657373206973206e6f74206f776e6572206e6f60448201527f7220617070726f76656400000000000000000000000000000000000000000000606482015260840161065e565b611036838383611703565b6001600160a01b038116600090815260096020526040812060010180546111ca90612123565b1515905061121a5760405162461bcd60e51b815260206004820152600d60248201527f556e6b6e6f776e2070726f787900000000000000000000000000000000000000604482015260640161065e565b6040805160a0810182526001600160a01b0384811682526020808301898152838501898152888416606080870182815260006080808a0182815260048054845260078a52928c90209a518b54908b1673ffffffffffffffffffffffffffffffffffffffff19918216178c55975160018c0155955160028b0155915160038a01805491909916961695909517909655915195830195909555905485518b81529283018a905294820193909352918201929092527fbaf1f6ab5aa5406df2735e70c52585e630f9744f4ecdedd8b619e983e927f0b6910160405180910390a160016004600082825461130a919061208b565b909155505060045461131e906001906120e0565b90505b949350505050565b600081815260086020908152604080832054835260079091529020546001600160a01b0316331461139c5760405162461bcd60e51b815260206004820152601460248201527f6d73672e73656e646572206e6f742070726f7879000000000000000000000000604482015260640161065e565b6113a684826115ff565b6114185760405162461bcd60e51b815260206004820152602260248201527f6073656e64657260206973206e6f74206f776e6572206e6f7220617070726f7660448201527f6564000000000000000000000000000000000000000000000000000000000000606482015260840161065e565b61103683838360405180602001604052806000815250611952565b6000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061147582610c3b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166115045760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161065e565b6000818152602081905260409020546001600160a01b0316156115695760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161065e565b6001600160a01b0382166000908152600160208190526040822080549192909161159490849061208b565b9091555050600081815260208190526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152602081905260408120546001600160a01b03166116895760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161065e565b600061169483610c3b565b9050806001600160a01b0316846001600160a01b031614806116cf5750836001600160a01b03166116c484610769565b6001600160a01b0316145b8061132157506001600160a01b0380821660009081526003602090815260408083209388168352929052205460ff16611321565b826001600160a01b031661171682610c3b565b6001600160a01b0316146117925760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161065e565b6001600160a01b03821661180d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161065e565b611818600082611433565b6001600160a01b038316600090815260016020819052604082208054919290916118439084906120e0565b90915550506001600160a01b0382166000908152600160208190526040822080549192909161187390849061208b565b9091555050600081815260208190526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610b0e816040516024016118f59190612078565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac000000000000000000000000000000000000000000000000000000001790526119db565b61195d848484611703565b611969848484846119fc565b6110365760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161065e565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000833b15611b95576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290611a5090339089908890889060040161203c565b602060405180830381600087803b158015611a6a57600080fd5b505af1925050508015611a9a575060408051601f3d908101601f19168201909252611a9791810190611f28565b60015b611b4a573d808015611ac8576040519150601f19603f3d011682016040523d82523d6000602084013e611acd565b606091505b508051611b425760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161065e565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611321565b506001611321565b828054611ba990612123565b90600052602060002090601f016020900481019282611bcb5760008555611c11565b82601f10611be457805160ff1916838001178555611c11565b82800160010185558215611c11579182015b82811115611c11578251825591602001919060010190611bf6565b50611c1d929150611c21565b5090565b5b80821115611c1d5760008155600101611c22565b600067ffffffffffffffff80841115611c5157611c51612174565b604051601f8501601f19908116603f01168101908282118183101715611c7957611c79612174565b81604052809350858152868686011115611c9257600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114611cc357600080fd5b919050565b600082601f830112611cd8578081fd5b611ce783833560208501611c36565b9392505050565b600060208284031215611cff578081fd5b611ce782611cac565b60008060408385031215611d1a578081fd5b611d2383611cac565b9150611d3160208401611cac565b90509250929050565b60008060008060808587031215611d4f578182fd5b611d5885611cac565b9350611d6660208601611cac565b9250611d7460408601611cac565b9396929550929360600135925050565b600080600060608486031215611d98578283fd5b611da184611cac565b9250611daf60208501611cac565b9150604084013590509250925092565b60008060008060808587031215611dd4578384fd5b611ddd85611cac565b9350611deb60208601611cac565b925060408501359150606085013567ffffffffffffffff811115611e0d578182fd5b8501601f81018713611e1d578182fd5b611e2c87823560208401611c36565b91505092959194509250565b60008060408385031215611e4a578182fd5b611e5383611cac565b915060208301358015158114611e67578182fd5b809150509250929050565b600080600060608486031215611e86578283fd5b611e8f84611cac565b9250602084013567ffffffffffffffff80821115611eab578384fd5b611eb787838801611cc8565b93506040860135915080821115611ecc578283fd5b50611ed986828701611cc8565b9150509250925092565b60008060408385031215611ef5578182fd5b611efe83611cac565b946020939093013593505050565b600060208284031215611f1d578081fd5b8135611ce78161218a565b600060208284031215611f39578081fd5b8151611ce78161218a565b600060208284031215611f55578081fd5b5035919050565b60008060408385031215611f6e578182fd5b82359150611d3160208401611cac565b60008060008060808587031215611f93578182fd5b8435935060208501359250611faa60408601611cac565b9150611fb860608601611cac565b905092959194509250565b60008151808452611fdb8160208601602086016120f7565b601f01601f19169290920160200192915050565b600084516120018184602089016120f7565b91909101928352507f2f0000000000000000000000000000000000000000000000000000000000000060208301526021820152604101919050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261206e6080830184611fc3565b9695505050505050565b602081526000611ce76020830184611fc3565b6000821982111561209e5761209e61215e565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120db576120db61215e565b500290565b6000828210156120f2576120f261215e565b500390565b60005b838110156121125781810151838201526020016120fa565b838111156110365750506000910152565b600181811c9082168061213757607f821691505b6020821081141561215857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610b0e57600080fdfea264697066735822122098cfedd5f61f23dcc6e6794f16eb241021e0338f511006e511481b983c8d803c64736f6c63430008040033";
