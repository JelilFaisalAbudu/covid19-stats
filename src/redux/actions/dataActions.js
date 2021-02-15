import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './actionTypes';

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
