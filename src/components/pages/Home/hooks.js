import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreData } from '../../../store/myStore/thunks';
import { getMyStoreData } from '../../../store/myStore/selectors';

export const useHome = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(getMyStoreData);

  useEffect(() => {
    dispatch(getStoreData());
  }, []);

  return { name: storeData.name };
};
