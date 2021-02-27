import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/actionTypes';

export const initialState = {
  loading: true,
  data: {
    Global: {},
    Countries: [],
  },
  error: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default dataReducer;
