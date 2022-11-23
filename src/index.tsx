import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Articles from './routes/articles';
import ScrollToTop from './ScrollToTop';
import Article from './routes/article';
import ThreeScene from './three-scene';
import { Claim } from './routes/claim';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'


const client = createClient({
  provider: getDefaultProvider(),
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <WagmiConfig client={client}>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark', primaryColor: 'orange'}} >
      <BrowserRouter basename='/'>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/card" element={<ThreeScene />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          </ScrollToTop>
      </BrowserRouter>
    </MantineProvider>
  </WagmiConfig>
);
