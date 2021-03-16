import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Redirect,
} from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../context/UserContext';
import styles from './Login.module.css';
import notFound from '../../components/notFound';

const Login = () => {
  let match = useRouteMatch();
  const location = useLocation();

  const { login } = React.useContext(UserContext);

  if (login === true)
    return <Redirect to={{ pathname: '/conta', state: { from: location } }} />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route path={`${match.path}/`} exact>
            <LoginForm />
          </Route>
          <Route path={`${match.path}/criar`}>
            <LoginCreate />
          </Route>
          <Route path={`${match.path}/perdeu`}>
            <LoginPasswordLost />
          </Route>
          <Route path={`${match.path}/reset`}>
            <LoginPasswordReset />
          </Route>
          <Route path={`${match.path}/*`} component={notFound} />
        </Switch>
      </div>
    </section>
  );
};

export default Login;
