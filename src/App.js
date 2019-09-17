import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import WhatWeDo from './components/page-contents/WhatWeDo';
import Cards from './components/page-contents/Cards';
import Footer from './components/page-contents/Footer';
import Modals from './components/page-contents/Modals';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header AppTitle="React Bootstrap" />
        <div className="container">
          <WhatWeDo />
          <Cards />
        </div>
        <Footer />
        <Modals />
      </div>
    );
  }
}
