import React from 'react';

import HomePage from './components/homePage';
import NavBar from "./components/navBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
