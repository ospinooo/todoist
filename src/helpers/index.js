/**
 * Helpers Module
 */
import { collatedTasks } from '../constants'

/**
 * Function helper to check if the selectedProject is available.
 * @param {x} selectedProject 
 */
export const collatedTasksExist = selectedProject => collatedTasks.find(task => task.key === selectedProject);




