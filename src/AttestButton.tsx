import React from "react"

export default function AttestButton({ link, chainName }: { link: string, chainName: string }) {
  let chainId: number;
  let EASContractAddress: string = '0x4200000000000000000000000000000000000021'

  switch (chainName) {
    case 'Optimism': chainId = 420; break;
    case 'Base': chainId = 84531; break;
    case 'Zora': chainId = 999; break;
    case 'Mode': chainId = 919; break;
  }

  return (
    <button className='px-4 bg-blue-600 text-white rounded py-1 mr-3 hover:bg-blue-500 hover:cursor-pointer'>Attest</button>
  )
}