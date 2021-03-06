import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/article/:id+" component={Article} />
    </Switch>
  );
};

export default Routes;
