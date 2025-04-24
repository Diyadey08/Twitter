'use client'
import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { nft_abi } from '@/abi/nft'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const CONTRACT_ADDRESS = '0xc5A035E6c22024dD8562cE5E2915A72b49A3162C'

export default function TweetMintApp() {
  const { address, isConnected } = useAccount()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mediaType: 'image',
    mediaURI: '',
    tokenURI: ''
  })

  const { 
    data: hash,
    error: writeError,
    isPending: isWriting,
    writeContract 
  } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ hash })

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isConnected) return

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: nft_abi,
      functionName: 'mint',
      args: [
        address,
        formData.title,
        formData.description,
        formData.mediaType,
        formData.mediaURI,
        formData.tokenURI
      ]
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-500">TweetMint</h1>
            <ConnectButton />
          </div>
          <p className="text-gray-600 mt-2">Turn your tweets into NFTs</p>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-6">
          {!isConnected ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Connect your wallet to get started</p>
              <ConnectButton />
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-blue-500 mb-4">Mint a Tweet</h2>
              <form onSubmit={handleMint} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Tweet Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="NFT Title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Tweet Content</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="What's happening?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Media Type</label>
                  <select
                    name="mediaType"
                    value={formData.mediaType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Media URI</label>
                  <input
                    type="text"
                    name="mediaURI"
                    value={formData.mediaURI}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ipfs://media-link"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Metadata URI</label>
                  <input
                    type="text"
                    name="tokenURI"
                    value={formData.tokenURI}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ipfs://metadata-link"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isWriting || isConfirming}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white ${isWriting || isConfirming ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}
                >
                  {isWriting ? 'Confirming...' : 
                   isConfirming ? 'Minting...' : 
                   'Mint Tweet as NFT'}
                </button>

                {writeError && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    Error: {writeError.message}
                  </div>
                )}

                {hash && (
                  <div className="mt-4 p-3 bg-blue-100 text-blue-700 rounded-lg">
                    <p className="font-medium">Transaction submitted!</p>
                    <a 
                      href={`https://etherscan.io/tx/${hash}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View on Etherscan
                    </a>
                  </div>
                )}

                {isConfirmed && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Tweet NFT minted successfully!
                  </div>
                )}
              </form>
            </>
          )}
        </div>

        {/* Profile */}
        {isConnected && (
          <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">Your Profile</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Wallet Address:</span> {address}</p>
              {/* Future: Display minted tweets, user profile info */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
