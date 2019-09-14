import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa';

import { useSelectedProjectValue } from '../../context';

import { Projects } from '../Projects';
import { AddPRoject } from '../AddProject';
/**
 * Application Sidebar.
 */
export const Sidebar = () => {

  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span><FaInbox></FaInbox></span>
          <span>Inbox</span>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
          }}
        >
          <span><FaRegCalendar></FaRegCalendar></span>
          <span>Today</span>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span><FaRegCalendarAlt></FaRegCalendarAlt></span>
          <span>Next 7 day</span>
        </li>
      </ul>

      <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
        <span>
          {/* When show projects is false we add the hidden-projects class */}
          <FaChevronDown className={!showProjects ? 'hidden-projects' : undefined}></FaChevronDown>
        </span>

        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddPRoject />}
    </div>
  )
}