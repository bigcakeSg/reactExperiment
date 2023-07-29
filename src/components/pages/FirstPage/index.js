import { Link } from 'react-router-dom';
import { useFirstPage } from './hooks';

const FirstPage = () => {
  const { name, loading, userId } = useFirstPage();

  return (
    <>
      <h1>First Page ({userId})</h1>
      <div>Bonjour {loading ? '...' : name}</div>
      <Link to={`/`}>Back</Link>
    </>
  );
};

export default FirstPage;
