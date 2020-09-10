import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import reducers from '../src/Redux'
import User from './Dal/User'
import Ticket from './Dal/Ticket'
import { createStore } from 'redux';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  // store.dispatch({
  //   type: "newTicket",
  //   ticket: new Ticket("ben", "running", "you need to run", ["asd", "sad"]),
  //   ticketStatus: "backlog"
  // })


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
