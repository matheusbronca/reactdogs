import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import Account from '../pages/Account/Account';
import { UserContext } from '../context/UserContext';

const Routes = () => {
  const { login } = React.useContext(UserContext);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute isAuth={login} path="/conta" component={Account} />
    </Switch>
  );
};

export default Routes;
