// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextPage from './components/TextPage';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const trigger = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", 'success')
      document.title = "TextUtil: Dark";
      // setInterval(()=>{
      //   document.title = "dd";
      // }, 2000)
      // setInterval(()=>{
      //   document.title = "cc";
      // }, 1500)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", 'success')
      document.title = "TextUtil: Light";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="Rinku" mode={mode} triggerHandling={trigger}/>
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextPage heading="This is text box" mode={mode} showAlert={showAlert} />} />
      </Routes>
      {/*<TextPage heading="This is text box" mode={mode} showAlert={showAlert} /> */}
      {/*<About/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
