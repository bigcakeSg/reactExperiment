export const STORE_DATA_LOADING = 'STORE DATA LOADING';
export const STORE_DATA_SUCCESS = 'STORE DATA SUCCESS';

export const storeDataLoading = () => ({
  type: STORE_DATA_LOADING
});

export const storeDataSuccess = (data) => ({
  type: STORE_DATA_SUCCESS,
  payload: data
});
