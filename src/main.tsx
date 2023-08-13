import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import './index.css'
import { baseGoerli, optimismGoerli, zoraTestnet } from 'viem/chains';

const modeTestnet = {
  id: 919,
  name: 'Mode Testnet',
  network: 'mode-testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.mode.network"],
    },
    public: {
      http: ["https://sepolia.mode.network"],
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.mode.network/",
    }
  },
  contracts: {
    // multicall3: {
    //   address: "0xca11bde05977b3631167028862be2a173976ca11",
    //   blockCreated: 49461,
    // },
  },
  testnet: true,
}

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return parseInt(this.toString());
};

const { chains, publicClient } = configureChains([optimismGoerli, baseGoerli, zoraTestnet, modeTestnet], [
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: ".town by Opti.Domains",
  projectId: "dd2a5d8744a5d72247899ef644bf8e1e",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
