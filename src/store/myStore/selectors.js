import { createSelector } from 'reselect';

const myStore = (state) => state.myStore;

export const getMyStoreLoading = (state) => myStore(state).loading;

// export const getMyStoreData = (state) => myStore(state).data;
export const getMyStoreData = createSelector(myStore, (store) => store.data);

export const getMyStoreError = (state) => myStore(state).error;
