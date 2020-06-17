import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // Search github user
  searchUsers = async (searchTerm) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                path='/'
                exact
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>

            <Users users={users} loading={loading} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
