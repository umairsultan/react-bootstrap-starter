import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/index.css';
import "jquery";
import "bootstrap";
import CustomRoutes from './Routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CustomRoutes AppTitle="React Bootstrap" />,
    document.getElementById('root')
);

serviceWorker.unregister();
