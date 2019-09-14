import React from 'react';
import { Header } from './components/layout/header';
import { Content } from './components/layout/content';
import { ProjectsProvider, SelectedProjectProvider } from './context';


import './App.scss'
// Name exports
export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
};

