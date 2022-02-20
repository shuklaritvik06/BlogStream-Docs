---
title: Development Setup
---

# Getting Started

### 👨‍💻 Demo

Check out the project: [BlogStream](https://blogstream.com)

### 👇 Prerequisites

Before installation, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

### 🛠 Setup Project

- Fork the project
- Clone the project
- Navigate to the project directory

```bash
cd BlogStream
```

- Install dependencies

```bash
cd BlogStream
```

- Run the development server:

```bash
npm run dev
```

### Moralis Server

Rename .env.example to .env in the main folder and provide your appId and serverUrl from Moralis.

Learn how to start moralis server [here](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server).

Example:

```
NEXT_PUBLIC_APP_ID = xxxxxxxxxxxx
NEXT_PUBLIC_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server

```

### To get USDCx coins

Go to superfluid dashboard. Go to currencies tab and wrap some USDCx coins

### Deploy Contract (local testing)

To test contract on local do the following: <br/>

1. To get test accounts -> `npx hardhat node`
2. Get the first account from the list and import it to metamask (this will be important later)
3. To Run tests -> `npx hardhat test`
4. To deploy the contract on local -> `npx hardhat run scripts/deploy.js --network localhost`

### Deploy Contract (Testnet/Mainnet)

To deploy contracts on testnet or mainnet do the following: <br/>

1. Get your account private key from metamask
2. Add it to .env file -> `pk=<account private key>`
3. Uncomment the following lines from hardhat.config.js file. example of matic testnet

```jsx
mumbai: {
    url: 'https://rpc-mumbai.matic.today',
    accounts: [process.env.pk]
}
```

4. To deploy the contract on local -> `npx hardhat run scripts/deploy.js --network mumbai`
5. Your deployed contract address will be shown on the console and also in config.js file.

### 👨‍💻 Contributing

Contributions make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are very much appreciated. Navigate to our GitHub repository and open an issue there.

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at `http://localhost:3000/`.
