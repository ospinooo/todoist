// App header
import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa/';
import { AddTask } from '../AddTask';
import logo from '../../assets/logo.png';
/**
 * Header
 */
export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Todoist"></img>
        </div>
        <div className="settings">
          <ul>
            <li
              data-testid="quick-add-task-action"
              className="settings__add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}>
              +
            </li>
            <li
              data-testid="dark-mode-action"
              onClick={() => setDarkMode(!darkMode)}>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
}
