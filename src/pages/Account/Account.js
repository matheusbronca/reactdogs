import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const Account = () => {
  const { path } = useRouteMatch();

  return (
    <section className="container">
      <UserHeader />
      <Route path={path} exact>
        <Feed />
      </Route>
      <Route path={`${path}/postar`}>
        <UserPhotoPost />
      </Route>
      <Route path={`${path}/estatisticas`}>
        <UserStats />
      </Route>
    </section>
  );
};

export default Account;
