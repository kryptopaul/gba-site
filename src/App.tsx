import React from 'react';
import { Hero } from './Hero';
import { Container } from '@mantine/core';
import { Features } from './Features';


function App() {
  return (
    <div className='App'>

      <Hero/>
      <Features {...{title: 'Join our crypto-circle', description: 'hola'}}/>
    </div>
  );
}

export default App;
