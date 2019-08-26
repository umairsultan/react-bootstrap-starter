import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bootstrap/bootstrap.min.css';
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
