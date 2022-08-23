# Building a transparent merch store with Polygon

### Author: Paul Lechocki

## Inspiration
While creating a store for Greenwich Blockchain Association, I came up with an idea of using blockchain to donate a % from each sale. From my own experience, many online stores claim to donate a part of their sales, but in this case the customers have to rely on the 3rd party to do it.

With my project, I would like to show that transparency in regards to how customers' funds are distributed is achievable. For this purpose, I've used the Ukraine [donation address](https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14). Even though it's on Ethereum, the same address can also be accessed on Polygon.

## What it does
Each purchase goes through a smart contract accessible [here](https://mumbai.polygonscan.com/address/0xb933c15c9137a22dc70cbd6c263d7daa870d7f9c)

The contract splits the `msg.value` in two parts:

- 15% for the Ukraine donation address 
- 85% for the store treasury

Upon sending the tokens to the above addresses, the contract updates the values of variables representing:
- The amount of items sold
- Total donated MATIC

The variables are then read from the blockchain and displayed on the website.
![](https://i.imgur.com/EOoDUBY.png)

In the end, the contract emits a Purchase event with the amounts donated, although this is not yet used by the app.

## How I built it
I've used React and the [Mantine UI](https://mantine.dev/) library for the front-end part. To communicate with the blockchain, I used Ethers and a Polygon Mumbai RPC from [Alchemy](https://www.alchemy.com/).

The site is hosted thanks to Azure Static Web Apps and the order processing is done using an Azure Logic App which adds the order to a database and sends an email confirmation.

The contract has been written in Solidity and I used Hardhat for unit tests and deployment scripts.

## Challenges I ran into
The challenge I didn't expect to run into was communicating with the blockchain before the user would connect their wallet. 

As a result, the users wouldn't be able to see the statistics unless they connected their Web3 Provider which would result in them seeing an endless loading circle instead of the statistics.

I solved it thanks to a RPC Node from [Alchemy](https://www.alchemy.com/) which allowed me to fetch the stats as soon as someone would visit the site.

## Accomplishments that I'm proud of
I'm happy to have created something which solves a problem with blockchain and removes the "Web2" middleman. 
It was also one of my first Web3 projects - an industry I'm a huge enthusiast of.

## What I learned
I learnt how to use Hardhat and how to write unit tests tailored for smart contracts. Working on this project has also refreshed my skills with React and somewhat with UI design.
