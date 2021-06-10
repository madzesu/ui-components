import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DemoPage from '../../pages/DemoPage';
import IndexPage from '../../pages/IndexPage';
import Navbar from '../Navbar';
import { ROUTES } from '../../utils/constants';

const PageRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.DEMO} component={DemoPage} />
        <Route exact path={ROUTES.INDEX} component={IndexPage} />
        <Redirect from="*" to={ROUTES.INDEX} />
      </Switch>
    </Router>
  );
};

export default PageRouter;
