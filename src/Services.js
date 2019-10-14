import React from 'react';
import './assets/css/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Cards from './components/page-contents/Cards';
import ServicesPage from './components/page-contents/ServicesPage';
import Footer from './components/page-contents/Footer';
import Modals from './components/page-contents/Modals';

export default class About extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Header pageTitle="Our Services" />
                <div className="container">
                    <ServicesPage />
                    <Cards />
                </div>
                <Footer />
                <Modals />
            </div>
        );
    }
}
