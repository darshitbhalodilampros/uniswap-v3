// a list of tokens by chain
import { ChainId, Currency, Token, WETH9 } from "udonswap-core";

import {
  ARB,
  BTC_BSC,
  BUSD_BSC,
  DAI,
  DAI_ARBITRUM_ONE,
  DAI_AVALANCHE,
  DAI_BSC,
  DAI_OPTIMISM,
  DAI_POLYGON,
  ETH_BSC,
  OP,
  USDC_ARBITRUM,
  USDC_ARBITRUM_GOERLI,
  USDC_AVALANCHE,
  USDC_BASE,
  USDC_BSC,
  USDC_MAINNET,
  USDC_OPTIMISM,
  USDC_OPTIMISM_GOERLI,
  USDC_POLYGON,
  USDC_POLYGON_MUMBAI,
  USDT,
  USDT_ARBITRUM_ONE,
  USDT_AVALANCHE,
  USDT_BSC,
  USDT_OPTIMISM,
  USDT_POLYGON,
  WBTC,
  WBTC_ARBITRUM_ONE,
  WBTC_OPTIMISM,
  WBTC_POLYGON,
  WETH_AVALANCHE,
  WETH_POLYGON,
  WETH_POLYGON_MUMBAI,
  WRAPPED_NATIVE_CURRENCY,
  DAI_MODE,
  nativeOnChain,
} from "./tokens";

type ChainTokenList = {
  readonly [chainId: number]: Token[];
};

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[];
};

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean),
);

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
  [ChainId.MAINNET]: [
    nativeOnChain(ChainId.MAINNET),
    DAI,
    USDC_MAINNET,
    USDT,
    WBTC,
    WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET] as Token,
  ],
  [ChainId.MODE]: [DAI_MODE, WRAPPED_NATIVE_CURRENCY[ChainId.MODE] as Token],
  [ChainId.GOERLI]: [
    nativeOnChain(ChainId.GOERLI),
    WRAPPED_NATIVE_CURRENCY[ChainId.GOERLI] as Token,
  ],
  [ChainId.SEPOLIA]: [
    nativeOnChain(ChainId.SEPOLIA),
    WRAPPED_NATIVE_CURRENCY[ChainId.SEPOLIA] as Token,
  ],

  [ChainId.ARBITRUM_ONE]: [
    nativeOnChain(ChainId.ARBITRUM_ONE),
    ARB,
    DAI_ARBITRUM_ONE,
    USDC_ARBITRUM,
    USDT_ARBITRUM_ONE,
    WBTC_ARBITRUM_ONE,
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE] as Token,
  ],
  [ChainId.ARBITRUM_GOERLI]: [
    nativeOnChain(ChainId.ARBITRUM_GOERLI),
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_GOERLI] as Token,
    USDC_ARBITRUM_GOERLI,
  ],

  [ChainId.OPTIMISM]: [
    nativeOnChain(ChainId.OPTIMISM),
    OP,
    DAI_OPTIMISM,
    USDC_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
    WETH9[ChainId.OPTIMISM],
  ],
  [ChainId.OPTIMISM_GOERLI]: [
    nativeOnChain(ChainId.OPTIMISM_GOERLI),
    USDC_OPTIMISM_GOERLI,
  ],

  [ChainId.BASE]: [
    nativeOnChain(ChainId.BASE),
    WRAPPED_NATIVE_CURRENCY[ChainId.BASE] as Token,
    USDC_BASE,
  ],
  [ChainId.BLAST]: [
    nativeOnChain(ChainId.BLAST),
    WRAPPED_NATIVE_CURRENCY[ChainId.BLAST] as Token,
  ],

  [ChainId.POLYGON]: [
    nativeOnChain(ChainId.POLYGON),
    WETH_POLYGON,
    USDC_POLYGON,
    DAI_POLYGON,
    USDT_POLYGON,
    WBTC_POLYGON,
  ],
  [ChainId.POLYGON_MUMBAI]: [
    nativeOnChain(ChainId.POLYGON_MUMBAI),
    WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_MUMBAI] as Token,
    USDC_POLYGON_MUMBAI,
    WETH_POLYGON_MUMBAI,
  ],

  [ChainId.BNB]: [
    nativeOnChain(ChainId.BNB),
    DAI_BSC,
    USDC_BSC,
    USDT_BSC,
    ETH_BSC,
    BTC_BSC,
    BUSD_BSC,
  ],

  [ChainId.AVALANCHE]: [
    nativeOnChain(ChainId.AVALANCHE),
    DAI_AVALANCHE,
    USDC_AVALANCHE,
    USDT_AVALANCHE,
    WETH_AVALANCHE,
  ],
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [ChainId.MAINNET]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.MAINNET],
    DAI,
    USDC_MAINNET,
    USDT,
    WBTC,
  ],
  [ChainId.BNB]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.BNB],
    DAI_BSC,
    USDC_BSC,
    USDT_BSC,
    BTC_BSC,
    BUSD_BSC,
    ETH_BSC,
  ],
  [ChainId.AVALANCHE]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[ChainId.AVALANCHE],
    DAI_AVALANCHE,
    USDC_AVALANCHE,
    USDT_AVALANCHE,
    WETH_AVALANCHE,
  ],
};
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(
        ChainId.MAINNET,
        "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
        8,
        "cDAI",
        "Compound Dai",
      ),
      new Token(
        ChainId.MAINNET,
        "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
        8,
        "cUSDC",
        "Compound USD Coin",
      ),
    ],
    [USDC_MAINNET, USDT],
    [DAI, USDT],
  ],
};
