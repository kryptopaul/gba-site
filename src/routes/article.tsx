import { HeaderResponsive } from "../HeaderResponsive";
import { Container } from "@mantine/core";
import { Title } from "@mantine/core";
import { FooterSimple } from "../FooterSimple";
import { useParams } from "react-router-dom";

const headerLinks = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join us'}];
const footerLinks: {link: string, label: string}[] = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join Us'}, {link: '/', label: 'Contact'}];


export default function Article() {
    const params = useParams();
    console.log(params)
    return (
        <Container>   
        <HeaderResponsive links={headerLinks} />
            <Title style={{marginBottom: '25px'}}>{"This is Article with ID: " + params.id}</Title>
            
        <FooterSimple {...{links: footerLinks}} />
        </Container>     
    );
  }