import React, { useState } from 'react';
import { Header } from './components/layout/header';
import { Content } from './components/layout/content';
import { Footer } from './components/layout/footer';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import './App.scss';


// Name exports
export const App = ({ darkModeDefault = false }) => {

  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
          <Footer></Footer>
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
};

