import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './actionTypes';

const URL = 'https://api.covid19api.com/summary';

export const doFetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const doFetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data },
});

export const doFetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});

const doFetchData = () => dispatch => {
  dispatch(doFetchDataRequest);
  axios.get(URL)
    .then(response => {
      const { data } = response;
      dispatch(doFetchDataSuccess(data));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(doFetchDataFailure(errorMsg));
    });
};

export default doFetchData;
