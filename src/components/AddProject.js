import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

// By defaut we don't show it. 
export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue(); // To update our state

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'asdfsadkjfnaskjdfbagl'
      })
      .then(() => {
        //After we created a new project 
        setProjects([]);
        setProjectName('');
        setShow(false);
      })

  console.log(show);

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
            </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
          >
            Cancel
            </span>
        </div>
      )}

      <span className="addproject__plus">+</span>
      <span data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  )
}

