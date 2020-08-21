import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Market from './components/Market';
import * as serviceWorker from './serviceWorker';
import { Inventory as inventory } from '../src/stores/Inventory'
import { Provider } from 'mobx-react';

const Inventory = new inventory()

const store = { Inventory }

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Market />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
