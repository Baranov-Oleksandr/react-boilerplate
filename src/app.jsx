import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/app.scss';
import { store } from './store';
import { Counter } from './modules/counter/components';
import { Todo } from './modules/todo/components';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <Todo />
  </Provider>,
  document.getElementById('root'),
);

window.store = store;
