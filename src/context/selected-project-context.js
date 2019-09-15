import React, { createContext, useContext, useState } from 'react';

// Context
export const SelectedProjectContext = createContext();


// Component Wrapper
export const SelectedProjectProvider = ({ children }) => {

  // By default INBOX is the selectedProject.
  // It is not a hook beacuse it doesn't depend on the outside (Firebase)
  // Just SPA data about the selected project to have it all over the data.
  const [selectedProject, setSelectedProject] = useState('INBOX'); // Not custom hook, []

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

// Component JFX
// Function to get the projects data
// USE this function will give use access to the context
// We have access to the values of the context
export const useSelectedProjectValue = () => useContext(SelectedProjectContext);






