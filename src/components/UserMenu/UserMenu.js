import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button variant="contained" type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};
