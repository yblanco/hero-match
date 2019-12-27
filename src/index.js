import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import { Provider } from './reducers';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Route key={0} path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
