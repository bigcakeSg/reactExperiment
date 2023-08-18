import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  & li {
    & a {
      text-decoration: none;
      margin: 5px;
      padding: 10px;
      background-color: #ddd;
      color: #333;
      &:hover {
        background-color: #333;
        color: #ddd;
      }
    }
  }
`;

const Menu = () => {
  return (
    <Banner>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/first-page/1`}>Page</Link>
      </li>
    </Banner>
  );
};

export default Menu;
