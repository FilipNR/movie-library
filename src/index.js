/// <reference types="redux-thunk/extend-redux" />
import React from 'react';
import { createRoot } from 'react-dom/client';
import thunk from 'redux-thunk';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container)

const store = createStore(allReducers, applyMiddleware(thunk));


root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

