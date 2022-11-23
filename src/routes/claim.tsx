import { Container, Title, Button, TextInput, Image, Notification, Progress, Text, SegmentedControl   } from "@mantine/core";
import { HeaderResponsive } from "../HeaderResponsive";
import { useState } from "react";
import { IconCheck, IconX } from '@tabler/icons';
import { FooterSimple } from "../FooterSimple";
import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

// WebSocket Stages
// 1. Uploading Data to IPFS {status: "uploading_metadata"}
// 2. Submitting tx - {status: "submitting_tx"}
// 3. Waiting for tx to be mined { status: 'submitted', txHash: transaction.hash }
// 4. Success - Tx confirmed { status: 'confirmed', txHash: transaction.hash }

export function Claim () {
    
    const [startedClaim, setStartedClaim] = useState(false)


    const headerLinks = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: 'https://www.greenwichsu.co.uk/societies/14182/', label: 'Join us'}];
    const footerLinks: {link: string, label: string}[] = [{link: '/', label: 'Home'}, {link: '/articles', label: 'Articles'}, {link: '/', label: 'Join Us'}, {link: '/', label: 'Contact'}];

    const [selectedDesign, setSelectedDesign] = useState<string | undefined>("blue");

    const [notificationLoading, setNotificationLoading] = useState(true);
    const [notificationTitle, setNotificationTitle] = useState("");
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationIcon, setNotificationIcon] = useState<React.ReactNode>(<IconCheck size={18} />);
    const [progress, setProgress] = useState(0);
    const [displayProgress, setDisplayProgress] = useState('block');
    const [displayNFTLink, setDisplayNFTLink] = useState('none');
    

    const { address, isConnected } = useAccount()

    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })



    const wss = new WebSocket('wss://4.234.25.202:8080');

    wss.onopen = () => {
        console.log('connected');

    };

    wss.onmessage = (e) => {
        try {
        const msg = JSON.parse(e.data);
        console.log(msg);
        if (msg.status === "uploading_metadata") {
            setProgress(25);
            setNotificationLoading(true);
            setNotificationTitle("Uploading Data to IPFS");
            setNotificationMessage("Please wait while we upload your data to IPFS");
        }

        if (msg.status === "submitting_tx") {
            setProgress(50);
            setNotificationLoading(true);
            setNotificationTitle("Submitting Transaction");
            setNotificationMessage("Please wait while we submit your transaction");
        }

        if (msg.status === "submitted") {
            setProgress(75);
            setNotificationLoading(true);
            setNotificationTitle("Waiting for Confirmation");
            setNotificationMessage("Please wait while we wait for your transaction to be mined");
        }

        if (msg.status === "confirmed") {
            setProgress(100);
            setNotificationLoading(false);
            setNotificationTitle("Success");
            setNotificationMessage("Your transaction has been confirmed!");
            setDisplayProgress('none');
            setDisplayNFTLink('block');
        }

        if (msg.status === "error") {
            setNotificationLoading(false);
            setNotificationTitle("Error");
            setNotificationMessage("There was an error with your transaction");
            setNotificationIcon(<IconX size={18} />);
            setDisplayProgress('none');
        }

    } catch (e) {
        console.log("not json " + e);
    }

    };

    wss.onerror = (error) => {
        console.log(`WebSocket error: ${JSON.stringify(error)}`);

    };
    

    function handleClaim(data: any) {
        console.log('sending payload');
        console.log(data);
        const email = data.email;

        if (!email) {
            alert("Email is required");
            return;
        }

        if (email.substring(data.email.length - 10) !== "@gre.ac.uk") {
            alert("Please enter a valid Greenwich email address");
            return;
        }

        setStartedClaim(true);
       
        wss.send(JSON.stringify(data));
    }

    function LoginBox() {
    return (
        <Button onClick={() => [connect()]} color={selectedDesign} style={{marginBottom: "20px"}}>Connect Wallet</Button>
    )
    }

    function ClaimForm() {


        const [email, setEmail] = useState<string | null>(null);


        return (
            <div style={{display: "flex", flexDirection: "column", textAlign: 'center', alignContent: 'center', alignItems:'center'}}>
            <Title order={1} style={{marginBottom: '10px'}}>Claim your pass!</Title>
            <Text style={{marginBottom: '10px'}}>Connected as {address}</Text>
            <SegmentedControl style={{width: '350px', marginBottom: '10px'}} value={selectedDesign} onChange={setSelectedDesign} data={[
                { label: "Blue", value: "blue" },
                { label: "Green", value: "green" },
                { label: "Orange", value: "orange" },
                { label: "Pink", value: "pink" },
                { label: "Red", value: "red" },
                { label: "Yellow", value: "yellow" },
            ]} />
            <TextInput style={{width: '350px', marginBottom: '10px'}} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="Enter your @gre.ac.uk email" />
            <Button style={{width: '350px'}} color={selectedDesign} onClick={() => handleClaim({
                "address": address,
                "design": selectedDesign,
                "email": email
            })}>Claim</Button>
           
            </div>
        )
    }

    function ClaimProgress() {
        return(
            <div style={{marginBottom: '20px', display: 'block', width: "100%", maxWidth: "500px"}}>
            <Notification
                loading={notificationLoading}
                title={notificationTitle}
                disallowClose
                style={{marginBottom: "20px"}}
                icon={notificationIcon}
                color={selectedDesign}
                
            >
        {notificationMessage}
        <br/>
        <a style={{color: 'white', display: displayNFTLink}} href={`https://testnets.opensea.io/${address}`} target="_blank" rel="noreferrer" >Check out your NFT on OpenSea!</a>
        </Notification>
        <Progress color={selectedDesign} style={{display: displayProgress}} value={progress} animate />
        </div>
        )
    }

    return (
        <>

        <HeaderResponsive links={headerLinks} />
        <Container
        style={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", marginTop: "-25px"}}
        >
            
            <Image
                src={`/images/passes/${selectedDesign}.png`}
                radius="md"
                style={{width: "100%", maxWidth: "500px", marginBottom: "20px"}}
                />

        {isConnected ? startedClaim ? <ClaimProgress /> : <ClaimForm /> : <LoginBox />}



        </Container>
        <FooterSimple {...{links: footerLinks}} />
        </>
    )
}