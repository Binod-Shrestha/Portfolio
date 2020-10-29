import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card"
import Avatar from "./components/Avatar/Avatar"

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="grid-container">
            <Card ></Card>
            <div className="profile">
               <Avatar />

            </div>
        </div>
    </div>
  );
}

export default App;
