import { SET_FILTER } from '../actionTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
