import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="grid-container">
            <Card className="card"></Card>
            <div className="profile">Profile</div>
        </div>
    </div>
  );
}

export default App;
