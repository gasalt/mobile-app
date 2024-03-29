/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BasePaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePaymaster__factory>;
    getContractFactory(
      name: "ERC2771Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2771Recipient__factory>;
    getContractFactory(
      name: "IForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IForwarder__factory>;
    getContractFactory(
      name: "IERC2771Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2771Recipient__factory>;
    getContractFactory(
      name: "IPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaymaster__factory>;
    getContractFactory(
      name: "IRelayHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRelayHub__factory>;
    getContractFactory(
      name: "IStakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakeManager__factory>;
    getContractFactory(
      name: "GsnEip712Library",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GsnEip712Library__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "GaslesPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GaslesPaymaster__factory>;
    getContractFactory(
      name: "GaslessFaucet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GaslessFaucet__factory>;
    getContractFactory(
      name: "GaslessToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GaslessToken__factory>;
    getContractFactory(
      name: "Increment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Increment__factory>;
    getContractFactory(
      name: "IWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWallet__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolErrors__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "TickMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMath__factory>;
    getContractFactory(
      name: "GasaltPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GasaltPaymaster__factory>;
    getContractFactory(
      name: "SubscriptionService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SubscriptionService__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "Wallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Wallet__factory>;
    getContractFactory(
      name: "WalletFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WalletFactory__factory>;

    getContractAt(
      name: "BasePaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePaymaster>;
    getContractAt(
      name: "ERC2771Recipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2771Recipient>;
    getContractAt(
      name: "IForwarder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IForwarder>;
    getContractAt(
      name: "IERC2771Recipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2771Recipient>;
    getContractAt(
      name: "IPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaymaster>;
    getContractAt(
      name: "IRelayHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRelayHub>;
    getContractAt(
      name: "IStakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakeManager>;
    getContractAt(
      name: "GsnEip712Library",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GsnEip712Library>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "GaslesPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GaslesPaymaster>;
    getContractAt(
      name: "GaslessFaucet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GaslessFaucet>;
    getContractAt(
      name: "GaslessToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GaslessToken>;
    getContractAt(
      name: "Increment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Increment>;
    getContractAt(
      name: "IWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWallet>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolErrors>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "TickMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickMath>;
    getContractAt(
      name: "GasaltPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GasaltPaymaster>;
    getContractAt(
      name: "SubscriptionService",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SubscriptionService>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "Wallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Wallet>;
    getContractAt(
      name: "WalletFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WalletFactory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
