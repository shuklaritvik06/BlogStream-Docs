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
### 👨‍💻 Contributing

Contributions make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are very much appreciated. Navigate to our GitHub repository and open an issue there.

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at `http://localhost:3000/`.
