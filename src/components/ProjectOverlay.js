import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({ setProject, showProjectOverlay, setShowProjectOverlay }) => {
  const { projects } = useProjectsValue();

  return (
    projects && showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li
              key={project.projectId}
              data-testid="project-overlay__list"
              onClick={() => {
                setProject(project.projectId); // new project
                setShowProjectOverlay(false); // hide it 
              }}
            >
              {project.name}
            </li>
          ))}

        </ul>
      </div>
    )
  )
}