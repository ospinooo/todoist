import React, { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import { ProjectOverlay } from "./ProjectOverlay";
import { TaskDate } from "./TaskDate";


export const AddTask = ({
  showAddTaskMain = true, // main task
  showShouldMain = false,
  showQuickAddTask, // header task
  setShowQuickAddTask
}) => {

  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(showShouldMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue();
  const addTask = () => {
    // project is the selected  by the project overlay. 
    // selectedProject is the one at the top of the list. 
    const projectId = project || selectedProject;
    let collatedDate = '';
    if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY');
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment()
        .add(7, 'days')
        .format('DD/MM/YYYY');
    }
    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId, // it is the same as projectId : projectId
          task, // it is the same as task : task
          date: collatedDate || taskDate,
          userId: 'asdfsadkjfnaskjdfbagl'
        })
        .then(() => {
          setTask('');
          setProject('')
          setShowMain('');
          setShowProjectOverlay(false);
        })
    )
  }
  console.log((showMain || showQuickAddTask));
  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
      data-testid="add-task-comp"
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => setShowMain(!showMain)}
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className="add-task__main" data-testid="add-task-main">
          {showQuickAddTask && (
            <>
              <div data-testid="quick-add-task">
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cancel-x"
                  data-testid="add-task-quick-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                >
                  X
                </span>
              </div>
            </>
          )}

          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay} />

          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate} />

          <input
            className="add-task__content"
            data-testid="add-task-content"
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)} // set Task data
          />
          <button
            type="button"
            className="add-task__submit"
            data-testid="add-task"
            onClick={() => showQuickAddTask
              ? addTask() && setShowQuickAddTask(false)
              : addTask()}>
            AddTask
          </button>

          {!showQuickAddTask && (
            <span className="add-task__cancel"
              data-testid="add-task-main-cancel"
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
            >
              Cancel
        </span>
          )}

          {/* OVerlay buttons */}
          <span
            className="add-task__project"
            data-test-id="show-project-overlay"
            onClick={() => setShowProjectOverlay(!showProjectOverlay)}
          >
            <FaRegListAlt></FaRegListAlt>
          </span>
          <span
            className="add-task__date"
            data-testid="show-task-date-overlay"
            onClick={() => setShowTaskDate(!showTaskDate)}
          >
            <FaRegCalendarAlt></FaRegCalendarAlt>
          </span>
        </div>
      )
      }
    </div >
  );
}