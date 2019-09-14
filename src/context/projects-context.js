/**
 * Explaining context
 * 
 * Provides a way not to pass data down the 
 * react component tree without using props.
 * 
 * You have a context without passing props.
 * 
 */
import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks';

// Provider - consumer
// Provider top level 
// Consumer lower level
export const ProjectsContext = createContext();



/**
 * Want to set the project when i am either:
 * - Adding new task
 * - through other layer
 * - Sidebar
 * 
 * Using context 
 */
export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects(); // Custom hook with {}

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Function to get the projects data
export const useProjectsValue = () => useContext(ProjectsContext);






