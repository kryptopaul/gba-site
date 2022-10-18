# Using Blockchain in student societies

### Author: Paul Lechocki

## Introduction

Working on a student-led blockchain project gives us plenty opportunities to step away from the default Web2 standards and explore the new possibilities that blockchain technology offers. In this article, I will share our plans to implement blockchain in a student-led group.

## Membership passes

The usual way of confirming a membership to a student society is to be registered through the Students Union website. While it allows to verify the identity of each applicant and to keep track of the members, it also has some drawbacks. The most important one is that it is not decentralized and the members are not in full control of their data. At any point, the database keeping track of the members could potentially be compromised and the data could be lost.

To solve this problem, on top of the standard procedure, we decided to implement a NFT-based membership pass system. The tokenized passes will be distributed by the society's smart contract and can be verified by anyone. The token will also visible in the member's wallet, so they can easily access it and show it to anyone.

The token's metadata will be stored using IPFS - a decentralized storage system. This is done to ensure a 100% uptime of the data which would not be possible while using a centralized solution. Additionally, it will not be possible for anyone to tamper with the data.

In the future, our team will look into implementing a Soulbond Token standard, so that the membership passes cannot be transferred to anyone else.

## Voting

Another problem that we wanted to solve is the voting process. The most common way of voting is to use a Google Form. While it is easy to use, it is not decentralized and the results are not verifiable and prone to manipulation. To solve this problem, we decided to implement a voting system using the blockchain. 

Our team is currently working on a voting system that will be based on-chain. All proposals and voting results will be displayed on a section of our website, but the voting process itself will be done using a smart contract. Storing information about each proposal and vote, along with a member who submitted it adds an additional layer of trust and transparency to the process. This way, it will not be possible for anyone to manipulate the results.

## Conclusion
The current ideas are only the beginning and we'll be continuously working on finding ways to implement blockchain in our society. If you have any ideas or suggestions, feel free to reach out to me on [Twitter](https://twitter.com/kryptopauldev).