import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrugsPageContainer from './redux/containers/DrugsPageContainer';
//import CreateRxPageContainer from './redux/containers/CreateRxPageContainer';
//import UpdateRxPageContainer from './redux/containers/UpdateRxPageContainer';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import SignupPageContainer from './redux/containers/SignupPageContainer';
import PatientsPageContainer from './redux/containers/PatientsPageContainer';
//import UpdatePtPageContainer from './redux/containers/UpdatePtPageContainer';
//import CreatePtPageContainer from './redux/containers/CreatePtPageContainer';

import setupStore from './redux/setupStore';

import { Provider } from 'react-redux';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Provider store={store}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <SignupPageContainer {...props} />}
                />
                <Route
                  exact
                  path="/login"
                  render={props => <LoginPageContainer {...props} />}
                />
                <Route
                  exact
                  path="/drugs"
                  render={props => <DrugsPageContainer {...props} />}
                />
                {/* <Route
                  exact
                  path="/add-drug"
                  render={props => <CreateRxPageContainer {...props} />}
                />
                <Route
                  exact
                  path="/drugs/:drugId"
                  render={props => <UpdateRxPageContainer {...props} />}
                /> */}
                <Route
                  exact
                  path="/patients"
                  render={props => <PatientsPageContainer {...props} />}
                />
                {/* <Route
                  exact
                  path="/patients/:patientId"
                  render={props => <UpdatePtPageContainer {...props} />}
                />
                <Route
                  exact
                  path="/add-patient"
                  render={props => <CreatePtPageContainer {...props} />}
                /> */}
              </Switch>
            </Router>
          </Provider>;
        </div>
      </MuiThemeProvider>
    );
  }
}
