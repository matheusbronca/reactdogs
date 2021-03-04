import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';
import UserHeader from './UserHeader';
import { useLocation } from 'react-router-dom';

const Account = () => {
  const location = useLocation();

  return (
    <section className="container">
      <UserHeader />
      <NavLink to={`conta/teste`} exact>
        TESTE
      </NavLink>
      <Route path="/conta" exact>
        <Feed />
      </Route>
      <Route path="/conta/teste">
        <h2>DEU CERTO</h2>
      </Route>
    </section>
  );
};

export default Account;
