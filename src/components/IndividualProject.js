
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';


export const IndividualProject = ({ project }) => {
  // Show confirm is the state to open or not the Confimation Modal.
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        // After deleting the project we set
        setProjects([...projects]);
        setSelectedProject('INBOX'); // set selected projects to the INBOX.
      })
  }

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => {
          //Oposite of showConfirm
          setShowConfirm(!showConfirm)
        }}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you wawnt to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}>
                Delete
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </div>
          </div>
        )}
      </span>
    </>
  )
}