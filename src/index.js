// TODO:
// StyledComponents
// Material UI
// Tests
// Typescript
// Param Axios

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import rootReducer from './store';

import './styles/global-styles.css';
import App from './App';
import Home from './components/pages/Home';
import FirstPage from './components/pages/FirstPage';
import { getStoreData } from './store/myStore/thunks';

const store = configureStore({ reducer: rootReducer, devTools: true });

const Root = () => {
  const dispatch = useDispatch();

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
          loader: ({ params }) => {
            dispatch(getStoreData(params.userId));
            return true;
          }
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
