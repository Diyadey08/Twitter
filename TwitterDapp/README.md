🐦 DecentraTweet – A Decentralized Twitter App
DecentraTweet is a decentralized microblogging platform built to give users full control over their data, identity, and posts. Unlike traditional platforms, DecentraTweet stores tweets on-chain or via IPFS and uses wallet-based authentication—ensuring privacy, censorship resistance, and ownership of your content.

🚀 Features
✍️ Post and delete short messages ("tweets")

🧵 Thread support for long-form posts

👛 Web3 login via MetaMask or WalletConnect

📦 IPFS or smart contract-based data storage

🧾 On-chain identity or ENS display names

🔍 Public feed and user-specific timelines

✅ Proof of authorship and content immutability

🌐 Fully open-source and censorship-resistant

🛠️ Stack
Frontend: Next.js / React

Smart Contracts: Solidity, Hardhat or Foundry

Blockchain: Ethereum / Polygon / Optimism

Storage: IPFS / Arweave (optional fallback)

Wallet Auth: Ethers.js / Wagmi / RainbowKit

📦 Installation
bash
Copy
Edit
git clone https://github.com/yourusername/Twitter.git

cd TwitterDapp

npm install

npm run dev

📄 Smart Contract Deployment
Set up environment:

bash
Copy
Edit
cp .env.example .env
# Fill in RPC URLs, private keys, etc.
Compile and deploy contracts:

bash
Copy
Edit
npx hardhat compile
npx hardhat run scripts/deploy.js --network yourNetwork
Update the frontend with deployed contract address.

🔐 Environment Variables
Key	Description
NEXT_PUBLIC_CONTRACT_ADDRESS	Your deployed Tweet smart contract
NEXT_PUBLIC_INFURA_ID or ALCHEMY_KEY	Blockchain provider access
IPFS_PROJECT_ID & IPFS_SECRET	For IPFS pinning services (e.g. Infura, Web3.Storage)

🧪 Test
bash
Copy
Edit
npx hardhat test
📸 Screenshots
Posting Tweet	Wallet Login

✨ Roadmap
✅ Basic tweet posting

✅ Wallet-based auth

⏳ Likes and reposts

⏳ Comment threads

⏳ ENS and profile metadata

⏳ DAO moderation (optional)

⏳ Mobile-friendly UI

🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss your ideas.
