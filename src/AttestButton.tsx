import React from "react"

const ATTEST_SCHEMA = "0x1fa7c1aeaecafeb2d3fa2e1bd7a3358c5e709b784c57421ae698f5ae6cfea2fa"

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