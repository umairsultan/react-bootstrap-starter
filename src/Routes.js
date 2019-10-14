import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import App from './App';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const CustomRoutes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);

export default CustomRoutes;