import React, { useState } from "react"
import { useAccount, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork } from "wagmi";
import EASABI from "./EAS.json"
import { encodeAbiParameters, parseAbiParameters } from "viem";

const ATTEST_SCHEMA = "0x1fa7c1aeaecafeb2d3fa2e1bd7a3358c5e709b784c57421ae698f5ae6cfea2fa"

export default function AttestButton({ link, chainName }: { link: string, chainName: string }) {
  const publicClient = usePublicClient();

  const { address } = useAccount();
  const { chain } = useNetwork();
  const { switchNetworkAsync } = useSwitchNetwork()

  let chainId: number = 420;
  let EASContractAddress: `0x${string}` = '0x4200000000000000000000000000000000000021'

  switch (chainName) {
    case 'Optimism': chainId = 420; break;
    case 'Base': chainId = 84531; EASContractAddress = '0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A'; break;
    case 'Zora': chainId = 999; EASContractAddress = '0xAb7659Bea77c619D3f2CecfE829c924ea24Eca16'; break;
    case 'Mode': chainId = 919; EASContractAddress = '0xAb7659Bea77c619D3f2CecfE829c924ea24Eca16'; break;
  }

  const [ isLoading, setIsLoading ] = useState(false)

  const { data, writeAsync } = useContractWrite({
    address: EASContractAddress,
    abi: EASABI,
    functionName: 'attest',
    chainId,
  })

  return (
    <button 
      className='px-4 bg-blue-600 text-white rounded py-1 mr-3 hover:bg-blue-500 hover:cursor-pointer disabled:opacity-60' 
      disabled={isLoading}
      onClick={async () => {
        try {
          setIsLoading(true)

          if (chain?.id != chainId) {
            if (switchNetworkAsync) {
              await switchNetworkAsync(chainId);
            }
          }

          const tx = await writeAsync({
            args: [
              {
                schema: ATTEST_SCHEMA,
                data: {
                  recipient: address,
                  expirationTime: 0,
                  revocable: true,
                  refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",
                  data: encodeAbiParameters(
                    parseAbiParameters(['string']),
                    [link],
                  ),
                  value: 0,
                },
              },
            ]
          })

          // await publicClient.waitForTransactionReceipt({ hash: tx.hash })

          window.alert("Attested successfully tx hash: " + tx.hash)
        } catch (err: any) {
          window.alert(err.shortMessage || err.message || "Unknown Error")
        } finally {
          setIsLoading(false)
        }
        
      }}
    >
      Attest
    </button>
  )
}