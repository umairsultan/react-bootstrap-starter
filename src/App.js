import React from 'react';
import './assets/App.css';
import Header from './components/Header';
import What_we_do from './components/page-contents/What_we_do';
import Cards from './components/page-contents/Cards';
import Footer from './components/page-contents/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <What_we_do />
          <Cards />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
