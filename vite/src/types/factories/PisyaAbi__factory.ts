/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet } from "fuels";
import { Interface, Contract } from "fuels";
import type { PisyaAbi, PisyaAbiInterface } from "../PisyaAbi";
const _abi = [
  {
    type: "function",
    inputs: [],
    name: "counter",
    outputs: [
      {
        name: "",
        type: "u64",
        components: null,
        typeArguments: null,
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        name: "param",
        type: "u64",
        components: null,
        typeArguments: null,
      },
    ],
    name: "increment_bank",
    outputs: [
      {
        name: "",
        type: "u64",
        components: null,
        typeArguments: null,
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        name: "param",
        type: "u64",
        components: null,
        typeArguments: null,
      },
    ],
    name: "decrement_bank",
    outputs: [
      {
        name: "",
        type: "u64",
        components: null,
        typeArguments: null,
      },
    ],
  },
];

export class PisyaAbi__factory {
  static readonly abi = _abi;
  static createInterface(): PisyaAbiInterface {
    return new Interface(_abi) as PisyaAbiInterface;
  }
  static connect(id: string, walletOrProvider: Wallet | Provider): PisyaAbi {
    return new Contract(id, _abi, walletOrProvider) as PisyaAbi;
  }
}
