import React from 'react'

export default function ShareButton({ title, link, chainName }: { title: string, link: string, chainName: string }) {
  return (
    <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(`I have just read ${title} document on ${chainName}\n${link}\n#DocuAttest`)} target="_blank">
      <button className='px-4 bg-blue-600 text-white rounded py-1 mr-3 hover:bg-blue-500 hover:cursor-pointer'>Share</button>
    </a>
  )
}