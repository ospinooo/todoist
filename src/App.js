import React from 'react';
import { Header } from './components/layout/header';
import { Content } from './components/layout/content';

// Name exports
export const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Content />
    </header>
  </div>
);

