/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CrowdfundFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createCrowdfund(string,string,address,address,uint256,uint256)": FunctionFragment;
    "logic()": FunctionFragment;
    "parameters()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createCrowdfund",
    values: [string, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "logic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createCrowdfund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "logic", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {
    "CrowdfundDeployed(address,string,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CrowdfundDeployed"): EventFragment;
}

export class CrowdfundFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CrowdfundFactoryInterface;

  functions: {
    createCrowdfund(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createCrowdfund(string,string,address,address,uint256,uint256)"(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    logic(overrides?: CallOverrides): Promise<[string]>;

    "logic()"(overrides?: CallOverrides): Promise<[string]>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, string, string] & {
        operator: string;
        fundingRecipient: string;
        fundingCap: BigNumber;
        operatorPercent: BigNumber;
        name: string;
        symbol: string;
      }
    >;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, string, string] & {
        operator: string;
        fundingRecipient: string;
        fundingCap: BigNumber;
        operatorPercent: BigNumber;
        name: string;
        symbol: string;
      }
    >;
  };

  createCrowdfund(
    name_: string,
    symbol_: string,
    operator_: string,
    fundingRecipient_: string,
    fundingCap_: BigNumberish,
    operatorPercent_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createCrowdfund(string,string,address,address,uint256,uint256)"(
    name_: string,
    symbol_: string,
    operator_: string,
    fundingRecipient_: string,
    fundingCap_: BigNumberish,
    operatorPercent_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  logic(overrides?: CallOverrides): Promise<string>;

  "logic()"(overrides?: CallOverrides): Promise<string>;

  parameters(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, string, string] & {
      operator: string;
      fundingRecipient: string;
      fundingCap: BigNumber;
      operatorPercent: BigNumber;
      name: string;
      symbol: string;
    }
  >;

  "parameters()"(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, string, string] & {
      operator: string;
      fundingRecipient: string;
      fundingCap: BigNumber;
      operatorPercent: BigNumber;
      name: string;
      symbol: string;
    }
  >;

  callStatic: {
    createCrowdfund(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createCrowdfund(string,string,address,address,uint256,uint256)"(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    logic(overrides?: CallOverrides): Promise<string>;

    "logic()"(overrides?: CallOverrides): Promise<string>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, string, string] & {
        operator: string;
        fundingRecipient: string;
        fundingCap: BigNumber;
        operatorPercent: BigNumber;
        name: string;
        symbol: string;
      }
    >;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, string, string] & {
        operator: string;
        fundingRecipient: string;
        fundingCap: BigNumber;
        operatorPercent: BigNumber;
        name: string;
        symbol: string;
      }
    >;
  };

  filters: {
    CrowdfundDeployed(
      crowdfundProxy: null,
      name: null,
      symbol: null,
      operator: null
    ): EventFilter;
  };

  estimateGas: {
    createCrowdfund(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createCrowdfund(string,string,address,address,uint256,uint256)"(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    logic(overrides?: CallOverrides): Promise<BigNumber>;

    "logic()"(overrides?: CallOverrides): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;

    "parameters()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createCrowdfund(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createCrowdfund(string,string,address,address,uint256,uint256)"(
      name_: string,
      symbol_: string,
      operator_: string,
      fundingRecipient_: string,
      fundingCap_: BigNumberish,
      operatorPercent_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    logic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "logic()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "parameters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
