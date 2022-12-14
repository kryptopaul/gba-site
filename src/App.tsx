import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Grid } from '@mantine/core';
import { NewsCard } from './NewsCard';
import { Container } from '@mantine/core';
import { FooterSimple } from './FooterSimple';
import { Button } from '@mantine/core';
import { Banner } from './Banner';
import { Link } from "react-router-dom";



const footerLinks: {link: string, label: string}[] = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join Us'}, {link: '/', label: 'Contact'}];

function App() {
  return (
    <div className='App'>
      <Hero/>
      <Container>
        <h1>Featured</h1>
        <Grid>
        <Grid.Col md={6} lg={4}>
        <Link to='/article/discord' style={{textDecoration: 'none'}}>
          <NewsCard {...{title: 'How to join our Discord server? (for dummies)', category: 'discord', image: '/articles/discord/discord.png', link: null, author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/ud7Sw6s.png', description:'Founder'}}} />
          </Link>
        </Grid.Col>
<Grid.Col md={6} lg={4}>
  <Link to='/article/blockchain-student-groups' style={{textDecoration: 'none'}}>
    <NewsCard {...{title: 'Using blockchain in student societies', category: 'blockchain', image: 'https://i.imgur.com/8ueUFdG.png', link: null, author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/ud7Sw6s.png', description:'Founder'}}} />
  </Link>
</Grid.Col>

<Grid.Col md={6} lg={4}>
<Link to='/article/signups-open' style={{textDecoration: 'none'}}>         
  <NewsCard {...{title: 'Greenwich Blockchain Association sign-ups are open!', category: 'Ethereum', image: 'https://bitcoin.pl/wp-content/uploads/2022/03/ethereum-pos.jpg', link: null, author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/ud7Sw6s.png', description:'Founder'}}} />
  </Link>
</Grid.Col>


  

</Grid>
      <div className='showMoreArticles' style={{textAlign: 'center', marginTop: '25px'}}>
        <Link to='/articles'><Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>View all articles</Button></Link>
      </div>
      <div style={{marginTop: '-50px'}}>
      <Features {...{title: 'About us', description: "Whether you're a newbie or a seasoned crypto-native, you'll find something for yourself."}}/>
      </div>
      <Banner/>
      </Container>
      <FooterSimple {...{links: footerLinks}} />
    </div>
  );
}

export default App;
