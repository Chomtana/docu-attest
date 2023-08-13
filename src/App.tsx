import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import ShareButton from './ShareButton'
import AttestButton from './AttestButton'

const DOCUMENTS: any = {
  'Optimism': [
    {
      title: 'Quick Start',
      link: 'https://community.optimism.io/docs/guides/',
    },
    {
      title: 'Networks, Public RPC Endpoints, & APIs',
      link: 'https://community.optimism.io/docs/useful-tools/networks/',
    },
    {
      title: 'Network Faucets',
      link: 'https://community.optimism.io/docs/useful-tools/faucets/',
    },
    {
      title: 'Bridging basic',
      link: 'https://community.optimism.io/docs/developers/bridge/basics/',
    },
    {
      title: 'RetroPGF 2 Project Discovery',
      link: 'https://app.optimism.io/retropgf-discovery',
    },
    {
      title: 'RetroPGF 3 Announcement',
      link: 'https://optimism.mirror.xyz/oVnEz7LrfeOTC7H6xCXb5dMZ8Rc4dSkD2KfgG5W9cCw',
    },
    {
      title: 'Running a local development environment',
      link: 'https://community.optimism.io/docs/developers/build/dev-node/#',
    },
    {
      title: 'Running an OP Mainnet or testnet node',
      link: 'https://community.optimism.io/docs/developers/build/run-a-node/',
    },
    {
      title: 'Getting started OP stack',
      link: 'https://stack.optimism.io/docs/build/getting-started/#configure-your-network',
    },
    {
      title: 'The OP Stack Client SDK',
      link: 'https://community.optimism.io/docs/sdk/js-client/',
    },
  ],
  'Base': [
    {
      title: 'How to run a base node without docker',
      link: 'https://gist.github.com/Chomtana/648a0a2afd2f78d78e49a18e71c98727',
    },
    {
      title: 'Node providers',
      link: 'https://docs.base.org/tools/node-providers',
    },
    {
      title: 'Run base node with docker',
      link: 'https://docs.base.org/guides/run-a-base-node'
    },
  ],
  'Zora': [
    {
      title: 'Network Details',
      link: 'https://docs.zora.co/docs/zora-network/network',
    },
    {
      title: 'Connecting MetaMask',
      link: 'https://docs.zora.co/docs/zora-network/metamask',
    },
    {
      title: 'Bridging',
      link: 'https://docs.zora.co/docs/zora-network/bridging',
    },
    {
      title: 'Creating an ERC1155 Contract',
      link: 'https://docs.zora.co/docs/smart-contracts/creator-tools/Deploy1155Contract',
    },
    {
      title: 'Creating an ERC1155 Token',
      link: 'https://docs.zora.co/docs/smart-contracts/creator-tools/Creating1155Token',
    },
    {
      title: 'Selling an ERC1155 Token',
      link: 'https://docs.zora.co/docs/smart-contracts/creator-tools/Selling1155',
    },
    {
      title: 'Minting an ERC1155 Token',
      link: 'https://docs.zora.co/docs/smart-contracts/creator-tools/Minting1155',
    },
    {
      title: 'Zora NFT Creator',
      link: 'https://docs.zora.co/docs/smart-contracts/creator-tools/ZoraNFTCreator',
    },
    {
      title: 'ERC721 Drop',
      link: 'https://docs.zora.co/docs/smart-contracts/creator-tools/ERC721Drop',
    },
    {
      title: 'Deploying Contracts',
      link: 'https://docs.zora.co/docs/zora-network/contracts',
    },
    {
      title: 'Deployed Contracts',
      link: 'https://docs.zora.co/docs/zora-network/deployments',
    },
  ],
  'Mode': [
    {
      title: 'How to setup the Mode Testnet in Metamask',
      link: 'https://docs.mode.network/get-started/using-mode',
    },
    {
      title: 'Bridging to Mode Testnet',
      link: 'https://docs.mode.network/get-started/bridging-to-mode-testnet',
    },
    {
      title: 'Deploy a smart contract with Thirdweb',
      link: 'https://docs.mode.network/build-on-mode/guides/deploying-a-smart-contract/using-thirdweb',
    },
    {
      title: 'Testnet Faucets',
      link: 'https://docs.mode.network/tools/testnet-faucets',
    }
  ]
}

function App() {
  const [ activeChain, setActiveChain ] = useState("Optimism")

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex items-center text-xl'><img src="/logo.png" style={{height: 32}} className='mr-2'></img> DocuAttest</div>
        <div>
          <ConnectButton />
        </div>
      </div>

      <div className='mt-6'>
        <div className='flex justify-center'>
          <div className={'px-4 py-2 shadow rounded hover:cursor-pointer hover:bg-gray-100 transition ' + (activeChain == 'Optimism' ? 'bg-amber-100' : 'bg-white')} onClick={() => setActiveChain('Optimism')}>Optimism</div>
          <div className={'px-4 py-2 shadow rounded hover:cursor-pointer hover:bg-gray-100 transition ' + (activeChain == 'Base' ? 'bg-amber-100' : 'bg-white')} onClick={() => setActiveChain('Base')}>Base</div>
          <div className={'px-4 py-2 shadow rounded hover:cursor-pointer hover:bg-gray-100 transition ' + (activeChain == 'Zora' ? 'bg-amber-100' : 'bg-white')} onClick={() => setActiveChain('Zora')}>Zora</div>
          <div className={'px-4 py-2 shadow rounded hover:cursor-pointer hover:bg-gray-100 transition ' + (activeChain == 'Mode' ? 'bg-amber-100' : 'bg-white')} onClick={() => setActiveChain('Mode')}>Mode</div>
        </div>

        <div className='mt-6'>
          <div className='text-2xl'>{activeChain}</div>

          {DOCUMENTS[activeChain].map((doc: any, i: number) => (
            <div className='p-4 flex flex-col md:flex-row justify-between shadow rounded mb-3 items-center' key={activeChain + i}>
              <div className='text-lg my-1'>
                {doc.title}
              </div>

              <div>
                <a href={doc.link} target="_blank">
                  <button className='px-4 bg-blue-600 text-white rounded py-1 mr-3 hover:bg-blue-500 hover:cursor-pointer' onClick={() => window.open(doc.link)}>Read</button>
                </a>
                
                <ShareButton title={doc.title} link={doc.link} chainName={activeChain} />
                <AttestButton link={doc.link} chainName={activeChain} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
