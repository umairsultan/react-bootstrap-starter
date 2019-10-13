import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import App from './App';
import About from './About';

const CustomRoutes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);

export default CustomRoutes;