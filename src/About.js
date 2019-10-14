import React from 'react';
import './assets/css/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import AboutPage from './components/page-contents/AboutPage';
import Footer from './components/page-contents/Footer';
import Modals from './components/page-contents/Modals';

export default class About extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Header pageTitle="About Us" />
                <div className="container">
                    <AboutPage />
                </div>
                <Footer />
                <Modals />
            </div>
        );
    }
}
