/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IWalletInterface extends utils.Interface {
  functions: {
    "execute(uint256,address,bytes)": FunctionFragment;
    "executeWithFee(address,address,uint256,uint256,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "execute" | "executeWithFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithFee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeWithFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWalletInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    execute(
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeWithFee(
      _token: PromiseOrValue<string>,
      _feeReceiver: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  execute(
    _weiValue: PromiseOrValue<BigNumberish>,
    _delegate: PromiseOrValue<string>,
    _callData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeWithFee(
    _token: PromiseOrValue<string>,
    _feeReceiver: PromiseOrValue<string>,
    _fee: PromiseOrValue<BigNumberish>,
    _weiValue: PromiseOrValue<BigNumberish>,
    _delegate: PromiseOrValue<string>,
    _callData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    executeWithFee(
      _token: PromiseOrValue<string>,
      _feeReceiver: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    execute(
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeWithFee(
      _token: PromiseOrValue<string>,
      _feeReceiver: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeWithFee(
      _token: PromiseOrValue<string>,
      _feeReceiver: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _weiValue: PromiseOrValue<BigNumberish>,
      _delegate: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
