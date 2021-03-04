/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/Routes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
