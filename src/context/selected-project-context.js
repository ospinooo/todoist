import React, { createContext, useContext, useState } from 'react';

// Context
export const SelectedProjectContext = createContext();


// Component Wrapper
export const SelectedProjectProvider = ({ children }) => {
  // By default INBOX is the selectedProject.
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






