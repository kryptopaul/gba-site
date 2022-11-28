import { HeaderResponsive } from "../HeaderResponsive";
import { Container } from "@mantine/core";
import { FooterSimple } from "../FooterSimple";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Loader } from '@mantine/core';
import { useEffect, useState } from "react";
import { Image } from "@mantine/core";


const headerLinks = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join us'}];
const footerLinks: {link: string, label: string}[] = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join Us'}, {link: '/', label: 'Contact'}];



export default function Article() {   

    const params = useParams();

    const [article, setArticle] = useState<any>();
    const [image , setImage] = useState<any>();
    const [loading, setLoading] = useState<string>("block");

    useEffect(() => {
        loadArticle(params.id);
    }, [params.id]);

    async function loadArticle(id:any) {
        try{
        // Fetch article
        const response = await fetch(`/articles/${id}/${id}.md`);
        const responseText = await response.text();

        // Fetch image
        const image = `/articles/${id}/${id}.png`;
        setLoading("none");
        setImage(image);
        setArticle(responseText);
        } catch (error) {
            console.log(error)
        }
    }

    function LinkRenderer(props:any) {
        return <a href={props.href} target="_blank" rel="noreferrer" style={{color: "white", textDecoration: "underline"}}>{props.children}</a>
      }

    function ImageRenderer(props:any) {
        if (params.id === 'discord') {
            return <Image style={{width: '250px'}} src={props.src} />
        }
        return <Image style={{width: '100%'}} src={props.src} />
    }

    return (
        <>
        <HeaderResponsive links={headerLinks} />
        <Container>   
            <Loader style={{display: loading}} color="orange" size="xl" />
            {/* 250px on all images in articles */}
            <Image src={image} height={'250px'} radius={'md'} fit={'cover'} />
            <ReactMarkdown components={{a: LinkRenderer, img: ImageRenderer}} className="markdown" children={article}></ReactMarkdown>
        </Container>     
        <FooterSimple {...{links: footerLinks}} />
        </>
    );
  }