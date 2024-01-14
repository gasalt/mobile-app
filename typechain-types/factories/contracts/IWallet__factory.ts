/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWallet, IWalletInterface } from "../../contracts/IWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_weiValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_feeReceiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_weiValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "executeWithFee",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IWallet__factory {
  static readonly abi = _abi;
  static createInterface(): IWalletInterface {
    return new utils.Interface(_abi) as IWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWallet {
    return new Contract(address, _abi, signerOrProvider) as IWallet;
  }
}