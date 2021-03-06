// Checkbox
import React from 'react';
// Import my firebase configuration.
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {


  /**
   * Archive a task function.
   */
  const archiveTask = (id) => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true
      })
  };

  return (
    <div className="checkbox-holder" data-testid="checkbox-action"
      onClick={() => archiveTask(id)}>
      <span className="checkbox"></span>
    </div>
  );
}