import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import RegisterForm from "./components/RegisterForm.js";
import JsonOutput from "./components/JsonOutput.js"


function App() {
  return (
    <div className="App">
      < Nav/>
      <div className="container">
        <RegisterForm/>
        <JsonOutput/>
      </div>
    </div>
    // App div above
  );
}

export default App;

