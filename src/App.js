import React, { Component } from 'react';
//import env from './env';
//import logo from './logo.svg';
//import './App.css';
// import OrderPage from './components/OrderPage';
import { Provider } from 'react-redux';

import setupStore from './redux/setupStore';
import OrderRxPageContainer from './redux/containers/OrderRxPageContainer';

//app = new App({});
//element = app.render()
//putItIntoDom(element);
//app.componentDidMount();

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <OrderRxPageContainer />
        </Provider>
      </div>
    );
  }
}
