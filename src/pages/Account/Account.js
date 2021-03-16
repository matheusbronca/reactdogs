import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';
import notFound from '../../components/notFound';
import { UserContext } from '../../context/UserContext';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import Head from '../../components/Helper/Head';

const Account = () => {
  const { path } = useRouteMatch();
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minhas Fotos" />
      <UserHeader />
      <Switch>
        <Route path={path} exact>
          <Feed user={data.id} />
        </Route>
        <Route path={`${path}/postar`}>
          <UserPhotoPost />
        </Route>
        <Route path={`${path}/estatisticas`}>
          <UserStats />
        </Route>
        <Route path={`${path}/*`} component={notFound} />
      </Switch>
    </section>
  );
};

export default Account;
