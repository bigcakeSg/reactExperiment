import { createSelector } from 'reselect';

const myStore = (state) => state.myStore;

export const getMyStoreLoading = createSelector(
  myStore,
  (store) => store.loading
);

export const getMyStoreData = createSelector(myStore, (store) => store.data);

export const getMyStoreError = createSelector(myStore, (store) => store.error);
