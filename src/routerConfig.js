import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';
import Home from './components/pages/Home';
import FirstPage from './components/pages/FirstPage';
import { getStoreData } from './store/myStore/thunks';

const Root = () => {
  const dispatch = useDispatch();

  const loadStoreData = ({ params }) => {
    dispatch(getStoreData(params.userId));
    return true;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>OUPS !</>,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'first-page/:userId',
          element: <FirstPage />,
          loader: loadStoreData
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Root;
