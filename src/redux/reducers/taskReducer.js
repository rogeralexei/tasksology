import { SET_TASKS } from '../actions/types';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
