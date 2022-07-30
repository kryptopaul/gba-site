import { HeaderResponsive } from "../HeaderResponsive";
import { Container } from "@mantine/core";
import { Title } from "@mantine/core";
import { Grid } from "@mantine/core";
import { NewsCard } from "../NewsCard";
import { FooterSimple } from "../FooterSimple";

const headerLinks = [{link: 'https://example.com', label: 'Home'}, {link: 'https://example.com', label: 'FAQ'}, {link: 'https://example.com', label: 'Contact'}];
const footerLinks: {link: string, label: string}[] = [{link: 'https://example.com', label: 'Home'}, {link: 'https://example.com', label: 'Join Us'}, {link: 'https://example.com', label: 'About'}, {link: 'https://example.com', label: 'Contact'}];


export default function Articles() {
    return (
        <Container>   
            <HeaderResponsive links={headerLinks} />
            <Title style={{marginBottom: '25px'}}>Articles</Title>
            <Grid>

        <Grid.Col md={6} lg={4}>
          <NewsCard {...{title: 'Our strategy for blockchain-ising UoG', category: 'blockchain', image: 'https://www.gre.ac.uk/__data/assets/image/0025/119653/gre.jpg', link: 'https://example.com', author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/MlliW1v.png', description:'Founder'}}} />
        </Grid.Col>

        <Grid.Col md={6} lg={4}>          
          <NewsCard {...{title: 'Greenwich Blockchain Association sign-ups are open!', category: 'Ethereum', image: 'https://bitcoin.pl/wp-content/uploads/2022/03/ethereum-pos.jpg', link: 'https://example.com', author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/MlliW1v.png', description:'Founder'}}} />
        </Grid.Col>

          <Grid.Col md={6} lg={4}>
            <NewsCard {...{title: 'Building a transparent merch store with Polygon', category: 'polygon', image: 'https://i.imgur.com/CJNRmnv.png', link: 'https://example.com', author: {name: 'Paul Lechocki', image: 'https://i.imgur.com/MlliW1v.png', description:'Founder'}}} />
          </Grid.Col>

      </Grid>
      <FooterSimple {...{links: footerLinks}} />
        </Container>     
    );
  }