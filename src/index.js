import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style.scss';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import { INITIAL_STORE_STATE } from './constants';

const store = createStore(rootReducer, INITIAL_STORE_STATE, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
