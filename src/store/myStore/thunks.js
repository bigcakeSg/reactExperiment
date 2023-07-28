import axios from 'axios';
import { storeDataLoading, storeDataSuccess } from './actions';

export const getStoreData = (test) => {
  return (dispatch) => {
    dispatch(storeDataLoading());
    dispatch(storeDataSuccess({ name: 'bigcakeSg' }));
    // return axios.get('http://...').then((res) => {
    //   console.log(res);
    // });
  };
};
