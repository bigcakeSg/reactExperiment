import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getMyStoreData,
  getMyStoreLoading
} from '../../../store/myStore/selectors';

export const useFirstPage = () => {
  const { userId } = useParams();

  const storeData = useSelector(getMyStoreData);
  const storeLoading = useSelector(getMyStoreLoading);

  return { name: storeData.name, loading: storeLoading, userId };
};
