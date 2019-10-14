import React from 'react';
import './assets/css/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import ContactPage from './components/page-contents/ContactPage';
import Footer from './components/page-contents/Footer';
import Modals from './components/page-contents/Modals';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Header pageTitle="Contact Us" />
                <div className="container">
                    <ContactPage />
                </div>
                <Footer />
                <Modals />
            </div>
        );
    }
}
