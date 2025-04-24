"use client"

import { useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, BookMarked, Home, Menu, MessageSquare, Search, Twitter, User, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null)

  const toggleMobileSubmenu = (menu: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#38444d] bg-[#15202b]/95 backdrop-blur supports-[backdrop-filter]:bg-[#15202b]/60 text-white">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-[#1d9bf0]/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo - Always visible */}
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <Twitter className="h-6 w-6 text-[#1d9bf0]" />
            <span className="text-xl font-bold">DTwitter</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex md:ml-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#1d9bf0]"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          {/* <Link
            href="/explore"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#1d9bf0]"
          >
            <Search className="h-4 w-4" />
            Explore
          </Link>
          <Link
            href="/notifications"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#1d9bf0]"
          >
            <Bell className="h-4 w-4" />
            Notifications
          </Link> */}
          <Link
            href="/TweetMint"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#1d9bf0]"
          >
                            <BookMarked className="h-5 w-5" />
                            Nft Mint
            </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-14 w-full bg-[#15202b] md:hidden border-b border-[#38444d]">
            <div className="container py-4 space-y-4">
              <Link href="/" className="flex items-center gap-2 transition-colors hover:text-[#1d9bf0] duration-200">
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/explore"
                className="flex items-center gap-2 transition-colors hover:text-[#1d9bf0] duration-200"
              >
                <Search className="h-5 w-5" />
                Explore
              </Link>
              <Link
                href="/notifications"
                className="flex items-center gap-2 transition-colors hover:text-[#1d9bf0] duration-200"
              >
                <Bell className="h-5 w-5" />
                Notifications
              </Link>
              
              <Link
                href="/nfts"
                className="flex items-center gap-2 transition-colors hover:text-[#1d9bf0] duration-200"
              >
                <BookMarked className="h-5 w-5" />
                NFT Mint
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 transition-colors hover:text-[#1d9bf0] duration-200"
              >
                <User className="h-5 w-5" />
                Profile
              </Link>
            </div>
          </div>
        )}

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-[#1d9bf0]/10" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "avatar",
            }}
            chainStatus="icon"
            showBalance={false}
          />
        </div>
      </div>
    </header>
  )
}
