import React from 'react';
import { useHome } from './hooks';

const Home = () => {
  const { name } = useHome();

  return <div>Home Page - {name}</div>;
};

export default Home;
