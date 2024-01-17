import { SET_TASKS } from './types';

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});
