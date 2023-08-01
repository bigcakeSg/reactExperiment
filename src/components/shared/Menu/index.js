import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/first-page/1`}>Page</Link>
      </li>
    </ul>
  );
};

export default Menu;
