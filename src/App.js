import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TextForm from './components/TextForm/TextForm';

function App() {

 
  return (
    <div className="App">
    <NavBar />
    <div className = 'container'>
    <TextForm />
    </div>
    
    </div>
  );
}

export default App;
