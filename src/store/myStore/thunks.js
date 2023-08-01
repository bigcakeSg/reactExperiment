import axios from 'axios';
import { storeDataLoading, storeDataSuccess } from './actions';

export const getStoreData = (userId) => {
  return (dispatch) => {
    dispatch(storeDataLoading());
    return axios
      .get(`https://swapi.dev/api/people/${userId}/`)
      .then(({ data }) => {
        dispatch(storeDataSuccess(data));
      });
  };
};
