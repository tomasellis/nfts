/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BeegNFT, BeegNFTInterface } from "../BeegNFT";

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
    name: "makeAnEpicNFT",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f5371756172654e465400000000000000000000000000000000000000000000008152506040518060400160405280600681526020017f5351554152450000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001cf565b508060019080519060200190620000af929190620001cf565b505050620000fd6040518060400160405280601e81526020017f54686973206973206d79204e465420636f6e74726163742e20576f61682100008152506200010360201b62000ca41760201c565b620003ac565b620001a3816040516024016200011a9190620002c0565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620001a660201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054620001dd9062000336565b90600052602060002090601f0160209004810192826200020157600085556200024d565b82601f106200021c57805160ff19168380011785556200024d565b828001600101855582156200024d579182015b828111156200024c5782518255916020019190600101906200022f565b5b5090506200025c919062000260565b5090565b5b808211156200027b57600081600090555060010162000261565b5090565b60006200028c82620002e4565b620002988185620002ef565b9350620002aa81856020860162000300565b620002b5816200039b565b840191505092915050565b60006020820190508181036000830152620002dc81846200027f565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200032057808201518184015260208101905062000303565b8381111562000330576000848401525b50505050565b600060028204905060018216806200034f57607f821691505b602082108114156200036657620003656200036c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b612f1280620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063de9d132f146102a7578063e985e9c5146102b1576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611d46565b6102e1565b604051610116919061250a565b60405180910390f35b6101276103c3565b6040516101349190612525565b60405180910390f35b61015760048036038101906101529190611d98565b610455565b60405161016491906124a3565b60405180910390f35b61018760048036038101906101829190611d0a565b6104da565b005b6101a3600480360381019061019e9190611c04565b6105f2565b005b6101bf60048036038101906101ba9190611c04565b610652565b005b6101db60048036038101906101d69190611d98565b610672565b6040516101e891906124a3565b60405180910390f35b61020b60048036038101906102069190611b9f565b610724565b6040516102189190612785565b60405180910390f35b6102296107dc565b6040516102369190612525565b60405180910390f35b61025960048036038101906102549190611cce565b61086e565b005b61027560048036038101906102709190611c53565b6109ef565b005b610291600480360381019061028c9190611d98565b610a51565b60405161029e9190612525565b60405180910390f35b6102af610ba3565b005b6102cb60048036038101906102c69190611bc8565b610c10565b6040516102d8919061250a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103ac57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103bc57506103bb82610d3d565b5b9050919050565b6060600080546103d2906129b5565b80601f01602080910402602001604051908101604052809291908181526020018280546103fe906129b5565b801561044b5780601f106104205761010080835404028352916020019161044b565b820191906000526020600020905b81548152906001019060200180831161042e57829003601f168201915b5050505050905090565b600061046082610da7565b61049f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610496906126e5565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104e582610672565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610556576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054d90612745565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610575610e13565b73ffffffffffffffffffffffffffffffffffffffff1614806105a457506105a38161059e610e13565b610c10565b5b6105e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105da90612625565b60405180910390fd5b6105ed8383610e1b565b505050565b6106036105fd610e13565b82610ed4565b610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063990612765565b60405180910390fd5b61064d838383610fb2565b505050565b61066d838383604051806020016040528060008152506109ef565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561071b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071290612665565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90612645565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107eb906129b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610817906129b5565b80156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b5050505050905090565b610876610e13565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108db906125e5565b60405180910390fd5b80600560006108f1610e13565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661099e610e13565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109e3919061250a565b60405180910390a35050565b610a006109fa610e13565b83610ed4565b610a3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3690612765565b60405180910390fd5b610a4b8484848461120e565b50505050565b6060610a5c82610da7565b610a9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a92906126c5565b60405180910390fd5b6000600660008481526020019081526020016000208054610abb906129b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae7906129b5565b8015610b345780601f10610b0957610100808354040283529160200191610b34565b820191906000526020600020905b815481529060010190602001808311610b1757829003601f168201915b505050505090506000610b4561126a565b9050600081511415610b5b578192505050610b9e565b600082511115610b90578082604051602001610b7892919061247f565b60405160208183030381529060405292505050610b9e565b610b9984611281565b925050505b919050565b6000610baf6007611328565b9050610bbb3382611336565b610be08160405180610360016040528061032d8152602001612bb061032d9139611354565b610c03604051806060016040528060258152602001612b8b6025913982336113c8565b610c0d6007611467565b50565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610d3a81604051602401610cb89190612525565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061147d565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e8e83610672565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610edf82610da7565b610f1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1590612605565b60405180910390fd5b6000610f2983610672565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f9857508373ffffffffffffffffffffffffffffffffffffffff16610f8084610455565b73ffffffffffffffffffffffffffffffffffffffff16145b80610fa95750610fa88185610c10565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610fd282610672565b73ffffffffffffffffffffffffffffffffffffffff1614611028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101f90612705565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108f906125c5565b60405180910390fd5b6110a38383836114a6565b6110ae600082610e1b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110fe91906128cb565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111559190612844565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611219848484610fb2565b611225848484846114ab565b611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125b90612585565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061128c82610da7565b6112cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c290612725565b60405180910390fd5b60006112d561126a565b905060008151116112f55760405180602001604052806000815250611320565b806112ff84611642565b60405160200161131092919061247f565b6040516020818303038152906040525b915050919050565b600081600001549050919050565b6113508282604051806020016040528060008152506117ef565b5050565b61135d82610da7565b61139c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139390612685565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906113c3929190611a2b565b505050565b6114628383836040516024016113e093929190612547565b6040516020818303038152906040527fe3849f79000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061147d565b505050565b6001816000016000828254019250508190555050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b60006114cc8473ffffffffffffffffffffffffffffffffffffffff1661184a565b15611635578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026114f5610e13565b8786866040518563ffffffff1660e01b815260040161151794939291906124be565b602060405180830381600087803b15801561153157600080fd5b505af192505050801561156257506040513d601f19601f8201168201806040525081019061155f9190611d6f565b60015b6115e5573d8060008114611592576040519150601f19603f3d011682016040523d82523d6000602084013e611597565b606091505b506000815114156115dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d490612585565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061163a565b600190505b949350505050565b6060600082141561168a576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506117ea565b600082905060005b600082146116bc5780806116a5906129e7565b915050600a826116b5919061289a565b9150611692565b60008167ffffffffffffffff8111156116fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117305781602001600182028036833780820191505090505b5090505b600085146117e35760018261174991906128cb565b9150600a856117589190612a30565b60306117649190612844565b60f81b8183815181106117a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117dc919061289a565b9450611734565b8093505050505b919050565b6117f9838361185d565b61180660008484846114ab565b611845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183c90612585565b60405180910390fd5b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c4906126a5565b60405180910390fd5b6118d681610da7565b15611916576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190d906125a5565b60405180910390fd5b611922600083836114a6565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119729190612844565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b828054611a37906129b5565b90600052602060002090601f016020900481019282611a595760008555611aa0565b82601f10611a7257805160ff1916838001178555611aa0565b82800160010185558215611aa0579182015b82811115611a9f578251825591602001919060010190611a84565b5b509050611aad9190611ab1565b5090565b5b80821115611aca576000816000905550600101611ab2565b5090565b6000611ae1611adc846127d1565b6127a0565b905082815260208101848484011115611af957600080fd5b611b04848285612973565b509392505050565b600081359050611b1b81612b2e565b92915050565b600081359050611b3081612b45565b92915050565b600081359050611b4581612b5c565b92915050565b600081519050611b5a81612b5c565b92915050565b600082601f830112611b7157600080fd5b8135611b81848260208601611ace565b91505092915050565b600081359050611b9981612b73565b92915050565b600060208284031215611bb157600080fd5b6000611bbf84828501611b0c565b91505092915050565b60008060408385031215611bdb57600080fd5b6000611be985828601611b0c565b9250506020611bfa85828601611b0c565b9150509250929050565b600080600060608486031215611c1957600080fd5b6000611c2786828701611b0c565b9350506020611c3886828701611b0c565b9250506040611c4986828701611b8a565b9150509250925092565b60008060008060808587031215611c6957600080fd5b6000611c7787828801611b0c565b9450506020611c8887828801611b0c565b9350506040611c9987828801611b8a565b925050606085013567ffffffffffffffff811115611cb657600080fd5b611cc287828801611b60565b91505092959194509250565b60008060408385031215611ce157600080fd5b6000611cef85828601611b0c565b9250506020611d0085828601611b21565b9150509250929050565b60008060408385031215611d1d57600080fd5b6000611d2b85828601611b0c565b9250506020611d3c85828601611b8a565b9150509250929050565b600060208284031215611d5857600080fd5b6000611d6684828501611b36565b91505092915050565b600060208284031215611d8157600080fd5b6000611d8f84828501611b4b565b91505092915050565b600060208284031215611daa57600080fd5b6000611db884828501611b8a565b91505092915050565b611dca816128ff565b82525050565b611dd981612911565b82525050565b6000611dea82612801565b611df48185612817565b9350611e04818560208601612982565b611e0d81612b1d565b840191505092915050565b6000611e238261280c565b611e2d8185612828565b9350611e3d818560208601612982565b611e4681612b1d565b840191505092915050565b6000611e5c8261280c565b611e668185612839565b9350611e76818560208601612982565b80840191505092915050565b6000611e8f603283612828565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b6000611ef5601c83612828565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b6000611f35602483612828565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f9b601983612828565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b6000611fdb602c83612828565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000612041603883612828565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b60006120a7602a83612828565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b600061210d602983612828565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000612173602e83612828565b91507f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008301527f6578697374656e7420746f6b656e0000000000000000000000000000000000006020830152604082019050919050565b60006121d9602083612828565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000612219603183612828565b91507f45524337323155524953746f726167653a2055524920717565727920666f722060008301527f6e6f6e6578697374656e7420746f6b656e0000000000000000000000000000006020830152604082019050919050565b600061227f602c83612828565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006122e5602983612828565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b600061234b602f83612828565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b60006123b1602183612828565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612417603183612828565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b61247981612969565b82525050565b600061248b8285611e51565b91506124978284611e51565b91508190509392505050565b60006020820190506124b86000830184611dc1565b92915050565b60006080820190506124d36000830187611dc1565b6124e06020830186611dc1565b6124ed6040830185612470565b81810360608301526124ff8184611ddf565b905095945050505050565b600060208201905061251f6000830184611dd0565b92915050565b6000602082019050818103600083015261253f8184611e18565b905092915050565b600060608201905081810360008301526125618186611e18565b90506125706020830185612470565b61257d6040830184611dc1565b949350505050565b6000602082019050818103600083015261259e81611e82565b9050919050565b600060208201905081810360008301526125be81611ee8565b9050919050565b600060208201905081810360008301526125de81611f28565b9050919050565b600060208201905081810360008301526125fe81611f8e565b9050919050565b6000602082019050818103600083015261261e81611fce565b9050919050565b6000602082019050818103600083015261263e81612034565b9050919050565b6000602082019050818103600083015261265e8161209a565b9050919050565b6000602082019050818103600083015261267e81612100565b9050919050565b6000602082019050818103600083015261269e81612166565b9050919050565b600060208201905081810360008301526126be816121cc565b9050919050565b600060208201905081810360008301526126de8161220c565b9050919050565b600060208201905081810360008301526126fe81612272565b9050919050565b6000602082019050818103600083015261271e816122d8565b9050919050565b6000602082019050818103600083015261273e8161233e565b9050919050565b6000602082019050818103600083015261275e816123a4565b9050919050565b6000602082019050818103600083015261277e8161240a565b9050919050565b600060208201905061279a6000830184612470565b92915050565b6000604051905081810181811067ffffffffffffffff821117156127c7576127c6612aee565b5b8060405250919050565b600067ffffffffffffffff8211156127ec576127eb612aee565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061284f82612969565b915061285a83612969565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561288f5761288e612a61565b5b828201905092915050565b60006128a582612969565b91506128b083612969565b9250826128c0576128bf612a90565b5b828204905092915050565b60006128d682612969565b91506128e183612969565b9250828210156128f4576128f3612a61565b5b828203905092915050565b600061290a82612949565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156129a0578082015181840152602081019050612985565b838111156129af576000848401525b50505050565b600060028204905060018216806129cd57607f821691505b602082108114156129e1576129e0612abf565b5b50919050565b60006129f282612969565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a2557612a24612a61565b5b600182019050919050565b6000612a3b82612969565b9150612a4683612969565b925082612a5657612a55612a90565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b612b37816128ff565b8114612b4257600080fd5b50565b612b4e81612911565b8114612b5957600080fd5b50565b612b658161291d565b8114612b7057600080fd5b50565b612b7c81612969565b8114612b8757600080fd5b5056fe416e204e465420772f20494420257320686173206265656e206d696e74656420746f202573646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c65776f69626d46745a53493649434a495957356b63335677644739754969774b496d526c63324e796158423061573975496a6f67496b456763326c735a5735304947686c636d387549454567643246305932686d6457776763484a766447566a644739794c69497343694a706257466e5a53493649434a6b595852684f6d6c745957646c4c334e325a79743462577737596d467a5a5459304c464249546a4a6165554930596c643464574e364d476c685346497759305276646b777a5a444e6b6554557a54586b31646d4e7459335a4e616b463354554d35656d527459326c4a53454a35576c684f62474e75576d785257453533576c644f4d465674526a4268567a67355357356f546d46584e56705556327831535563786246705955576c4a53467077576c686b5132497a5a7a6c4a616b466e54554e42656b35555157644e656c563353576f3053306c445157644a524868365a456873633170554e48565a62555a36576c4e434e306c48576e4269523363325355686b62324659556d785065554a74596a49314d457858576d68695632787a5a5652765a324d79566e6c6856316b3353556461646d4a755558526a4d6d7732576c52765a303155556e646c52484e6e5a6c5233646d4d7a556a56695231557251326c425a306c445154686a62565a715a454e434d324658556a42685244427054565242643070545357646852315a77576a4a6f4d4642545358684e5245467353576c436257465865484e5155307070596b6447616d46355357644d656a524c53554e425a306c4565444261574767775355686e4f556c715658644b55306c6e5a565177615535555157784a61554a71596b6447656d4e364d476c5a62555a36576c4e4a5a3170484f585268567a566f596d355264466c74526e706156336877596d31564f556c744d58426152314a7a576c4e4a5a325248566a526b517a466f596d314f6232497a53546c4a62544677576b6453633170545353745357454a7757544234646d4e74556b6c5a567a46705a46684b626c70595354684d4d314a735a5568524b304e7164335a6a4d317075554763395053494b66513d3da264697066735822122082c2380a3dbac2bd10676faa49dafdec3fc7064bb65b30c92ebe0540b669abc164736f6c63430008000033";

export class BeegNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BeegNFT> {
    return super.deploy(overrides || {}) as Promise<BeegNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BeegNFT {
    return super.attach(address) as BeegNFT;
  }
  connect(signer: Signer): BeegNFT__factory {
    return super.connect(signer) as BeegNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BeegNFTInterface {
    return new utils.Interface(_abi) as BeegNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeegNFT {
    return new Contract(address, _abi, signerOrProvider) as BeegNFT;
  }
}
