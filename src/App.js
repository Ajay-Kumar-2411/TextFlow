import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import React, { useState } from 'react'
import Alert from './Component/Alert'; 

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#1f1e41'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />
         <div className="container my-3">
         {/* <Routes> */}
         {/* <Route exact path="/" element={<TextForm heading="Enter Text Below" mode={mode}/>} /> */} 
         <TextForm heading="Enter Text Below" mode={mode}/>
         {/* exact keyword is used so that react matches exact path*/}
         {/* <Route exact path="/about" element={<About/>} /> */}
       {/* </Routes> */}
         </div>
       {/* </BrowserRouter>  */}
    </>
  );
}

export default App;
