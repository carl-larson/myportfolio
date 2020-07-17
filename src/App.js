import React from 'react';

import Navigation from './components/Navigation'
import Router from './Router'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
