import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import OrderRxPageContainer from './redux/containers/OrderRxPageContainer';
import CreateRxPageContainer from './redux/containers/CreateRxPageContainer';
import UpdateRxPageContainer from './redux/containers/UpdateRxPageContainer';
import setupStore from './redux/setupStore';

import { Provider } from 'react-redux';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              {/* <Route
                exact
                path="/"
                render={props => <IndexPageContainer {...props} />}
              /> */}
              <Route
                exact
                path="/"
                render={props => <OrderRxPageContainer {...props} />}
              />
              <Route
                exact
                path="/add-drug"
                render={props => <CreateRxPageContainer {...props} />}
              />
              <Route
                exact
                path="/drugs/:drugId"
                render={props => <UpdateRxPageContainer {...props} />}
              />
            </Switch>
          </Router>
        </Provider>;
      </div>
    );
  }
}
