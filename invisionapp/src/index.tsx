import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './_reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';

const loggerMiddleware = createLogger();

export const middlewares = [thunkMiddleware, loggerMiddleware, promise];

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
