import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as FeedIcon } from '../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/estatisticas.svg';
import { ReactComponent as AddPhotoIcon } from '../../assets/adicionar.svg';
import { ReactComponent as ExitIcon } from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const { url } = useRouteMatch();

  const menuButton = React.useRef();

  React.useEffect(() => {
    window.addEventListener('click', ({ target }) => {
      if (target !== menuButton.current) {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <>
      {mobile && (
        <button
          ref={menuButton}
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to={`${url}`} activeClassName={styles.active} exact>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to={`${url}/postar`} activeClassName={styles.active}>
          <AddPhotoIcon />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <NavLink to={`${url}/estatisticas`} activeClassName={styles.active}>
          <StatsIcon />
          {mobile && 'Estatísticas'}
        </NavLink>
        <button onClick={userLogout}>
          <ExitIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
