"use client"

import { useAccount, useReadContract, useWriteContract } from "wagmi"
import { useEffect, useState } from "react"
import { TwitterContractABI } from "@/abi/TwitterContractABI"
import { formatDistanceToNow } from "date-fns"
import { Heart, Trash2, Loader2, MessageCircle, Repeat, Share } from "lucide-react"
import type { Address } from "wagmi"

const CONTRACT_ADDRESS = "0xDBCCfe3a1886a21564665435dA48eA8EcdcAd9fF"

export default function TwitterDApp() {
  const { address, isConnected } = useAccount()
  const { writeContract } = useWriteContract()
  const [newTweetContent, setNewTweetContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const {
    data: tweetsData,
    refetch: refetchTweets,
    isPending: isTweetsLoading,
  } = useReadContract({
    abi: TwitterContractABI,
    address: CONTRACT_ADDRESS,
    functionName: "getAllTweets",
  })

  const [tweets, setTweets] = useState<
    Array<{
      id: bigint
      author: Address
      content: string
      timestamp: bigint
      likes: bigint
    }>
  >([])

  useEffect(() => {
    if (tweetsData) {
      const [ids, authors, contents, timestamps, likes] = tweetsData as [
        bigint[],
        Address[],
        string[],
        bigint[],
        bigint[],
      ]

      const formattedTweets = ids.map((id, index) => ({
        id,
        author: authors[index],
        content: contents[index],
        timestamp: timestamps[index],
        likes: likes[index],
      }))

      setTweets(formattedTweets)
    }
  }, [tweetsData])

  const handleCreateTweet = async () => {
    if (!newTweetContent.trim()) return

    setIsLoading(true)
    try {
      await writeContract({
        abi: TwitterContractABI,
        address: CONTRACT_ADDRESS,
        functionName: "createTweet",
        args: [newTweetContent],
      })
      setNewTweetContent("")
      setTimeout(() => refetchTweets(), 3000)
    } catch (error) {
      console.error("Error creating tweet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteTweet = async (tweetId: bigint) => {
    if (!window.confirm("Are you sure you want to delete this tweet?")) return

    setIsLoading(true)
    try {
      await writeContract({
        abi: TwitterContractABI,
        address: CONTRACT_ADDRESS,
        functionName: "deleteTweet",
        args: [tweetId],
      })
      setTimeout(() => refetchTweets(), 3000)
    } catch (error) {
      console.error("Error deleting tweet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLikeTweet = async (tweetId: bigint) => {
    setIsLoading(true)
    try {
      await writeContract({
        abi: TwitterContractABI,
        address: CONTRACT_ADDRESS,
        functionName: "likeTweet",
        args: [tweetId],
      })
      setTimeout(() => refetchTweets(), 3000)
    } catch (error) {
      console.error("Error liking tweet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUnlikeTweet = async (tweetId: bigint) => {
    setIsLoading(true)
    try {
      await writeContract({
        abi: TwitterContractABI,
        address: CONTRACT_ADDRESS,
        functionName: "unlikeTweet",
        args: [tweetId],
      })
      setTimeout(() => refetchTweets(), 3000)
    } catch (error) {
      console.error("Error unliking tweet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const truncateAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="text-blue-500 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Decentralized Twitter</h1>
        <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-200">
          Please connect your wallet to continue
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto border-x border-gray-200 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Decentralized Twitter</h1>
            <div className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Connected as: <span className="text-blue-500">{truncateAddress(address || "")}</span>
          </div>
        </header>

        {/* Create Tweet Form */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {address ? address.substring(2, 4).toUpperCase() : ""}
            </div>
            <div className="flex-1">
              <textarea
                className="w-full bg-transparent border-none outline-none resize-none text-gray-800 placeholder-gray-400 text-lg"
                placeholder="What's happening?"
                rows={3}
                value={newTweetContent}
                onChange={(e) => setNewTweetContent(e.target.value)}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2 text-blue-500">
                  <button className="p-2 rounded-full hover:bg-blue-50 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-blue-50 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </button>
                </div>
                <button
                  className={`px-4 py-2 rounded-full font-bold ${
                    newTweetContent.trim() && !isLoading
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-blue-300 text-white cursor-not-allowed"
                  } transition`}
                  onClick={handleCreateTweet}
                  disabled={isLoading || !newTweetContent.trim()}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Posting...</span>
                    </div>
                  ) : (
                    "Tweet"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tweets Feed */}
        {isTweetsLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : tweets.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <p className="text-lg">No tweets yet. Be the first to tweet!</p>
          </div>
        ) : (
          <div>
            {tweets.map((tweet) => (
              <div
                key={tweet.id.toString()}
                className="p-4 border-b border-gray-200 hover:bg-blue-50 transition cursor-pointer"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {tweet.author.substring(2, 4).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-bold mr-2 text-gray-800">{truncateAddress(tweet.author)}</span>
                      {tweet.author === address && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          You
                        </span>
                      )}
                      <span className="text-gray-400 ml-2">·</span>
                      <span className="text-gray-400 text-sm ml-2">
                        {formatDistanceToNow(Number(tweet.timestamp) * 1000, {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <p className="my-2 whitespace-pre-wrap text-gray-800">{tweet.content}</p>
                    <div className="flex justify-between mt-3 text-gray-500">
                      <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        <MessageCircle className="w-4 h-4" />
                        <span>0</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-green-500 transition">
                        <Repeat className="w-4 h-4" />
                        <span>0</span>
                      </button>
                      <button
                        className={`flex items-center gap-1 ${
                          tweet.likes > 0 ? "text-pink-500" : ""
                        } hover:text-pink-500 transition`}
                        onClick={() => (tweet.likes > 0 ? handleUnlikeTweet(tweet.id) : handleLikeTweet(tweet.id))}
                        disabled={isLoading}
                      >
                        <Heart className={`w-4 h-4 ${tweet.likes > 0 ? "fill-pink-500" : ""}`} />
                        <span>{tweet.likes.toString()}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        <Share className="w-4 h-4" />
                      </button>
                      {tweet.author === address && (
                        <button
                          className="flex items-center gap-1 hover:text-red-500 transition"
                          onClick={() => handleDeleteTweet(tweet.id)}
                          disabled={isLoading}
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}