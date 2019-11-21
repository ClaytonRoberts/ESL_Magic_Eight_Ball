import React from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import QuestionAnswer from './components/QuestionAnswer';


function App() {


  
  return (
    <div className="App">
    <AppNavbar/>
    <QuestionAnswer/> 
    </div>
  );
}

export default App;
