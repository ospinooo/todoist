import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';


// Tasks Hook !
export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]); // tasks is the variable and set Tasks is the function that changes it
  const [archivedTasks, setArchivedTasks] = useState([]);
  // do some work
  useEffect(() => {
    // our tasks
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'asdfsadkjfnaskjdfbagl');

    // depending on the selectedProject
    // give me the tasks from the selected project

    unsubscribe = selectedProject && !collatedTasksExist(selectedProject) // it doesn't exist in the collected tasks
      ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
      : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
        : selectedProject === 'INBOX' || selectedProject === 0
          ? (unsubscribe = unsubscribe.where('date', '==', ''))
          : unsubscribe

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));
      console.log(newTasks);

      // set it.
      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
            task =>
              moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7
              && task.archived !== true
          )
          : newTasks.filter(task => task.archived === true)
      );

      // set in the state.
      setArchivedTasks(newTasks.filter(task => task.archived !== false)); // give me all true
    });

    return () => unsubscribe();
  }, [selectedProject]); // once it changes we run all above
  // Only run it when it is selected a new project. 

  return { tasks, archivedTasks };
};


// use Projects Hook!
export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  // Refresh when projects change.
  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'asdfsadkjfnaskjdfbagl')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));

        // needs the condition only set if they are different
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      })
  }, [projects]); // rerun when projects changes.

  return { projects, setProjects }
}