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
      title: 'Bridging basic',
      link: 'https://community.optimism.io/docs/developers/bridge/basics/',
    },
    {
      title: 'Getting started OP stack',
      link: 'https://stack.optimism.io/docs/build/getting-started/#configure-your-network',
    }
  ],
  'Base': [
    {
      title: 'How to run a base node without docker',
      link: 'https://gist.github.com/Chomtana/648a0a2afd2f78d78e49a18e71c98727',
    },
    {
      title: 'Base attestation',
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
      title: '',
      link: '',
    }
  ],
  'Mode': [
    {
      title: '',
      link: '',
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

          {DOCUMENTS[activeChain].map((doc: any) => (
            <div className='p-4 flex justify-between shadow rounded mb-3'>
              <div className='text-lg'>
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
