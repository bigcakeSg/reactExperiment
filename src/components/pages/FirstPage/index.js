import { Link } from 'react-router-dom';
import { useFirstPage } from './hooks';
import { Button } from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

const FirstPage = () => {
  const { name, loading, userId } = useFirstPage();

  return (
    <>
      <h1>First Page ({userId})</h1>
      <p>Bonjour {loading ? '...' : name}</p>
      <Link to={`/`}>
        <Button variant="contained" startIcon={<SettingsBackupRestoreIcon />}>
          Back
        </Button>
      </Link>
    </>
  );
};

export default FirstPage;
