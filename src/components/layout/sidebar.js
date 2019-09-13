import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
// Arquitecture
// b = block
// e = element
// m = modifier

/**
 * Application Sidebar.
 */
export const Sidebar = () => {


  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li><span><FaInbox></FaInbox></span><span>Inbox</span></li>
        <li><span><FaRegCalendar></FaRegCalendar></span><span>Today</span></li>
        <li><span><FaRegCalendarAlt></FaRegCalendarAlt></span><span>Next 7 day</span></li>
      </ul>


      <div className="sidebar__middle">
        <span>
          <FaChevronDown></FaChevronDown>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here!</ul>
      Add Project Component Here!!
  </div>
  )
}