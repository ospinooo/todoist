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
        <li data-testid="inbox" className="inbox">
          <span><FaInbox></FaInbox></span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span><FaRegCalendar></FaRegCalendar></span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span><FaRegCalendarAlt></FaRegCalendarAlt></span>
          <span>Next 7 day</span>
        </li>
      </ul>

      <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
        <span>
          <FaChevronDown></FaChevronDown>
        </span>

        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddPRoject />}
    </div>
  )
}