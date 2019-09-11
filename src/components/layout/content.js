import React from 'react';
import { Sidebar } from './sidebar';
import { Tasks } from '../Tasks'

export const Content = () => {
  return (<section>
    <Sidebar />
    <Tasks />
  </section>)
}