/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Increment, IncrementInterface } from "../../contracts/Increment";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_forwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getTrustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
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
    name: "lastCaller",
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
    inputs: [],
    name: "value",
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
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b50604051610536380380610536833981810160405281019061003791906100f2565b6100468161004c60201b60201c565b5061011f565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100bf82610094565b9050919050565b6100cf816100b4565b81146100da57600080fd5b50565b6000815190506100ec816100c6565b92915050565b6000602082840312156101085761010761008f565b5b6000610116848285016100dd565b91505092915050565b6104088061012e6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632113522a1461005c5780633fa4f2451461007a578063572b6c0514610098578063ce1b815f146100c8578063e8927fbc146100e6575b600080fd5b6100646100f0565b6040516100719190610278565b60405180910390f35b610082610116565b60405161008f91906102ac565b60405180910390f35b6100b260048036038101906100ad91906102f8565b61011c565b6040516100bf9190610340565b60405180910390f35b6100d0610175565b6040516100dd9190610278565b60405180910390f35b6100ee61019e565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101a6610200565b600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008154809291906101f99061038a565b9190505550565b6000601460003690501015801561021c575061021b3361011c565b5b1561023057601436033560601c9050610234565b3390505b90565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026282610237565b9050919050565b61027281610257565b82525050565b600060208201905061028d6000830184610269565b92915050565b6000819050919050565b6102a681610293565b82525050565b60006020820190506102c1600083018461029d565b92915050565b600080fd5b6102d581610257565b81146102e057600080fd5b50565b6000813590506102f2816102cc565b92915050565b60006020828403121561030e5761030d6102c7565b5b600061031c848285016102e3565b91505092915050565b60008115159050919050565b61033a81610325565b82525050565b60006020820190506103556000830184610331565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061039582610293565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036103c7576103c661035b565b5b60018201905091905056fea264697066735822122044608d4cf146198d74e3ae63b867a62996c57b8a67d6a0409e52fd1f4661cd8b64736f6c63430008110033";

type IncrementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncrementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Increment__factory extends ContractFactory {
  constructor(...args: IncrementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _forwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Increment> {
    return super.deploy(_forwarder, overrides || {}) as Promise<Increment>;
  }
  override getDeployTransaction(
    _forwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_forwarder, overrides || {});
  }
  override attach(address: string): Increment {
    return super.attach(address) as Increment;
  }
  override connect(signer: Signer): Increment__factory {
    return super.connect(signer) as Increment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncrementInterface {
    return new utils.Interface(_abi) as IncrementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Increment {
    return new Contract(address, _abi, signerOrProvider) as Increment;
  }
}
