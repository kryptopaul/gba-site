import { HeaderResponsive } from "../HeaderResponsive";
import { Container } from "@mantine/core";
import { Title } from "@mantine/core";
import { FooterSimple } from "../FooterSimple";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Loader } from '@mantine/core';
import { useEffect, useState } from "react";

const headerLinks = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join us'}];
const footerLinks: {link: string, label: string}[] = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join Us'}, {link: '/', label: 'Contact'}];



export default function Article() {   

    const params = useParams();

    const [article, setArticle] = useState<any>();

    useEffect(() => {
        loadArticle(params.id);
    }, [params.id]);

    async function loadArticle(id:any) {
        try{
        const response = await fetch(`https://raw.githubusercontent.com/kryptopaul/gba-site/master/articles/${id}.md`);
        const responseText = await response.text();
        setArticle(responseText);
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
        <HeaderResponsive links={headerLinks} />
        <Container>   
            <Title style={{marginBottom: '25px'}}>{"This is Article with ID: " + params.id}</Title>
            <Loader color="orange" size="xl" />
            <ReactMarkdown children={article}></ReactMarkdown>
        </Container>     
        <FooterSimple {...{links: footerLinks}} />
        </>
    );
  }