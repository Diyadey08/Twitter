import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ModeToggle } from "@/components/utils/mode-toggle"
import {
  MessageSquare,
  BarChart2,
  Calendar,
  CheckCircle,
  Clock,
  Hash,
  Heart,
  Users,
  LayoutDashboard,
  Bell,
  Settings,
  Bookmark,
  Mail,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Decentralized Social Networking Reimagined
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Tweet, connect, and earn rewards on our blockchain-powered platform where you own your content and data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/Twitter"
                    className="inline-block px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    Start Tweeting
                  </Link>
                  <Link
                    href="#features"
                    className="inline-block px-5 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-base font-medium transition duration-300 ease-in-out"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-90 flex items-center justify-center">
                  <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-[80%]">
                    <div className="flex items-center gap-2 mb-4">
                      <Hash className="h-5 w-5 text-blue-500" />
                      <div className="text-lg font-semibold">#Web3TrendingNow</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-200"></div>
                        <div>
                          <div className="font-medium">CryptoDev42</div>
                          <p className="text-sm">Just deployed my first smart contract! 🎉 #BuildInPublic #Web3</p>
                          <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" /> 24
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" /> 8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-500">
                  Platform Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Future of Social Media</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience social networking with true ownership, transparency, and rewards.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* Decentralized Posts */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Decentralized Posts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Immutable posts stored on blockchain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>True ownership of your content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>No centralized censorship</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Token Rewards */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Heart className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Token Rewards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Earn tokens for engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Tip your favorite creators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Stake tokens for platform governance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NFT Integration */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Bookmark className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">NFT Integration</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Mint tweets as NFTs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Collect and trade digital moments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Display your NFT collection</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Decentralized Identity */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Decentralized Identity</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Own your social identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Portable reputation across platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Verified credentials</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Privacy Controls */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Settings className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Privacy Controls</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Encrypted direct messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Selective data sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>No hidden algorithms</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Analytics */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <BarChart2 className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transparent Analytics</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>On-chain engagement metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Auditable content reach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Token earnings dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the decentralized social network in just a few simple steps.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                  <p className="text-muted-foreground">
                    Sign up with your Ethereum wallet to create your decentralized identity. No email or password needed.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Start Posting</h3>
                  <p className="text-muted-foreground">
                    Share your thoughts, images, and content. Each post is stored on the blockchain for permanence.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Heart className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Earn & Engage</h3>
                  <p className="text-muted-foreground">
                    Get rewarded with tokens for quality content and engagement. Tip creators and monetize your influence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Community Voices</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what our users say about the decentralized social experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="h-48 bg-gradient-to-r from-blue-300 to-cyan-200 rounded-lg mb-4 flex items-center justify-center">
                  <MessageSquare className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web3 Developer</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>1.2K followers</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Finally a social platform where I own my audience data. My posts can't be arbitrarily censored, and I earn crypto from my content!"
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Hash className="h-4 w-4" />
                  <span>#Web3 #Solidity</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="h-48 bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <MessageSquare className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">NFT Artist</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>3.4K followers</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Minting my artwork as NFTs directly from my posts changed everything. My collectors can now own verifiable pieces of my creative journey."
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Hash className="h-4 w-4" />
                  <span>#DigitalArt #NFTCommunity</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="h-48 bg-gradient-to-r from-cyan-300 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <MessageSquare className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">DeFi Educator</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>8.7K followers</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The token rewards system creates better incentives for quality content. I earn more here teaching about DeFi than on traditional platforms."
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Hash className="h-4 w-4" />
                  <span>#DeFi #CryptoEducation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about our decentralized social network.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">How is this different from Twitter?</h3>
                <p className="text-muted-foreground">
                  Our platform is decentralized - you own your content, data isn't sold to advertisers, and there's no central authority that can censor or ban users arbitrarily.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">Do I need crypto to use this?</h3>
                <p className="text-muted-foreground">
                  You only need a crypto wallet to sign up. All basic features are free, and you'll earn tokens through participation that can be used for premium features.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">How do token rewards work?</h3>
                <p className="text-muted-foreground">
                  You earn platform tokens for creating quality content that gets engagement (likes, replies). These tokens give you governance rights and access to premium features.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">Can I mint my posts as NFTs?</h3>
                <p className="text-muted-foreground">
                  Yes! Any post can be minted as an NFT with one click. This creates a verifiable, collectible version of your content on the blockchain.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">Is my data private?</h3>
                <p className="text-muted-foreground">
                  You control what data is shared. Public posts are on-chain, while private messages are encrypted. No hidden algorithms track your behavior across the web.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">What blockchains are supported?</h3>
                <p className="text-muted-foreground">
                  Currently Ethereum and Polygon, with plans to expand to other EVM-compatible chains. All content is stored on IPFS for decentralization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join the Decentralized Social Revolution?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take back control of your social media experience today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/Twitter" 
                  className="inline-block px-6 py-3 rounded-2xl bg-white hover:bg-blue-600 hover:text-white text-blue-500 text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  Start Tweeting
                </Link>
                <Link 
                  href="#features" 
                  className="inline-block px-5 py-3 border border-white text-white hover:bg-slate-50 hover:bg-opacity-10 rounded-xl text-base font-medium transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 py-12 md:py-16 lg:flex-row lg:gap-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">DAppTwitter</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The decentralized social network where you own your content, data, and relationships.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-base font-medium">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Governance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} DAppTwitter. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Decentralized. Transparent. User-owned.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}