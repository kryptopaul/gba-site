import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from './routes/articles';
import ScrollToTop from './ScrollToTop';
import Article from './routes/article';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark', primaryColor: 'orange'}} >
    <BrowserRouter basename='/'>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        </ScrollToTop>
    </BrowserRouter>
  </MantineProvider>
);
