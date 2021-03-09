import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as DogsIcon } from '../assets/dogs.svg';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink className={styles.logo} to="/" aria-label="Dogs - Home">
          <DogsIcon />
        </NavLink>
        {data ? (
          <NavLink className={styles.login} to="/conta">
            {data.nome}
          </NavLink>
        ) : (
          <NavLink className={styles.login} to="/login">
            Login | Criar
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
