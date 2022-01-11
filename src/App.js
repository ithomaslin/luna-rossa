import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// layouts
import MainLayout from './layouts/MainLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

// style
import './default.scss';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
          <Route path="/login" render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        </Switch>
      </div>
    );
  };
}

export default App;
