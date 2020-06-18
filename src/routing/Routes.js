import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import Alert from '../components/layout/Alert';
import User from '../components/users/User';

let githubAboutLink;

if (process.env.NODE_ENV !== 'production') {
  githubAboutLink = process.env.REACT_APP_GITHUB_ABOUT_LINK;
} else {
  githubAboutLink = process.env.GITHUB_ABOUT_LINK;
}

const Routes = () => (
  <Router>
    <div className='App'>
      <Navbar title='Github Finder' icon='fab fa-github' />
      <div className='container'>
        <Alert />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path={githubAboutLink} component={About} />
          <Route exact path='/user/:login' component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Routes;
