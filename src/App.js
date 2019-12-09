import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MainView from './components/00-main/MainView';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {MainView}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
