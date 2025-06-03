export const appConfig = {
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID || "eip155:421614",
  nativeTokenSymbol: process.env.NEXT_PUBLIC_NATIVE_TOKEN_SYMBOL || "MXNB",
  portalClientApiKey: process.env.NEXT_PUBLIC_PORTAL_CLIENT_API_KEY || "",
  explorerUrl:
    process.env.NEXT_PUBLIC_EXPLORER_URL || "https://sepolia.arbiscan.io/tx/",
  rpcConfig: {
    "eip155:421614": `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
    "eip155:42161": `https://arb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
  },
};
