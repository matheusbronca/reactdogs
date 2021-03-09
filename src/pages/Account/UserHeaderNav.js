import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as FeedIcon } from '../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/estatisticas.svg';
import { ReactComponent as AddPhotoIcon } from '../../assets/adicionar.svg';
import { ReactComponent as ExitIcon } from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setStateMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);
  const { url } = useRouteMatch();

  return (
    <nav className={styles.nav}>
      <NavLink to={`${url}`} activeClassName={styles.active} exact>
        <FeedIcon />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to={`${url}/estatisticas`} activeClassName={styles.active}>
        <StatsIcon />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to={`${url}/postar`} activeClassName={styles.active}>
        <AddPhotoIcon />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <ExitIcon />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
