import {
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";
import { mergeNetworks } from "@dynamic-labs/sdk-react-core";

const evmNetworks = [
  {
    blockExplorerUrls: ["https://etherscan.io/"],
    chainId: 1,
    chainName: "Ethereum Mainnet",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "Ethereum",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
      iconUrl: "https://app.dynamic.xyz/assets/networks/eth.svg",
    },
    networkId: 1,
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    vanityName: "Ethereum",
  },
  {
    blockExplorerUrls: ["https://blockexplorer.electroneum.com/"],
    chainId: 52014,
    chainName: "Electroneum Mainnet",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"], // Replace with ETN icon if available
    name: "Electroneum Mainnet",
    nativeCurrency: {
      decimals: 18,
      name: "ETN",
      symbol: "ETN",
      iconUrl: "https://app.dynamic.xyz/assets/networks/eth.svg", // Replace with ETN icon if available
    },
    networkId: 52014,
    rpcUrls: ["https://rpc.electroneum.com"],
    vanityName: "Electroneum Mainnet",
  },
];

const DynamicSettings = {
  overrides: {
    evmNetworks: (networks: any) => mergeNetworks(evmNetworks, networks),
  },
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID || "",
        walletConnectors: [EthereumWalletConnectors],
        overrides:{evmNetworks}
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};
