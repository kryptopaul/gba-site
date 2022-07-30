import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Grid } from '@mantine/core';
import { NewsCard } from './NewsCard';
import { Container } from '@mantine/core';
import { FooterSimple } from './FooterSimple';

const footerLinks: {link: string, label: string}[] = [{link: 'https://google.com', label: 'Home'}, {link: 'https://google.com', label: 'Join Us'}, {link: 'https://google.com', label: 'About'}, {link: 'https://google.com', label: 'Contact'}];

function App() {
  return (
    <div className='App'>
      <Hero/>
      <Container>
        <h1>News</h1>
      <Grid>

        <Grid.Col md={6} lg={4}>
          <NewsCard {...{title: 'Our strategy for blockchain-ising UoG', category: 'blockchain', image: 'https://www.gre.ac.uk/__data/assets/image/0025/119653/gre.jpg', link: 'https://google.com', author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/MlliW1v.png', description:'Founder'}}} />
        </Grid.Col>

        <Grid.Col md={6} lg={4}>          
          <NewsCard {...{title: 'Greenwich Blockchain Association sign-ups are open!', category: 'Ethereum', image: 'https://bitcoin.pl/wp-content/uploads/2022/03/ethereum-pos.jpg', link: 'https://google.com', author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/MlliW1v.png', description:'Founder'}}} />
        </Grid.Col>

          <Grid.Col md={6} lg={4}>
            <NewsCard {...{title: 'Building a transparent merch store with Polygon', category: 'polygon', image: 'https://i.imgur.com/CJNRmnv.png', link: 'https://google.com', author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/MlliW1v.png', description:'Founder'}}} />
          </Grid.Col>

      </Grid>
      <Features {...{title: 'Join our crypto-circle!', description: 'Feel free to join us - we welcome everyone interested in Web3!'}}/>


      </Container>
      <FooterSimple {...{links: footerLinks}} />
    </div>
  );
}

export default App;
