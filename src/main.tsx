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

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return parseInt(this.toString());
};

const { chains, publicClient } = configureChains([optimismGoerli, baseGoerli, zoraTestnet], [
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
