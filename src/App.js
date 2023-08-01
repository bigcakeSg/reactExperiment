import { Outlet } from 'react-router';
import Menu from './components/shared/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
