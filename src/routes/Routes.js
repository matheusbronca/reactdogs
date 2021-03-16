import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import Account from '../pages/Account/Account';
import Photo from '../components/Photo/Photo';
import { UserContext } from '../context/UserContext';
import UserProfile from '../pages/Account/UserProfile';
import notFound from '../components/notFound';

const Routes = () => {
  const { login } = React.useContext(UserContext);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute isAuth={login} path="/conta" component={Account} />
      <Route path="/foto/:id" component={Photo} />
      <Route path="/perfil/:user" component={UserProfile} />
      <Route path="*" component={notFound} />
    </Switch>
  );
};

export default Routes;
