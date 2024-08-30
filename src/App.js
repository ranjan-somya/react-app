// import logo from './logo.svg';
import './App.css';
import Textbar from './component/Textbar';
import Navbar from './component/Navbar';
// import About from './component/About';
import React, {  useState } from 'react'
import Aleart from './component/Aleart';
// import {
//   BrowserRouter,
  
//   Route,
  
//   Routes
// } from "react-router-dom";
// import Contact from './component/Contact';


function App() {
  const[mode,setmode]=useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode been Unable","success");
      document.title='TextUtils - Dark Mode';
      setInterval(() => {
        document.title='TextUtils is amazing mode';
      }, 2000);
      setInterval(() => {
        document.title='Install TextUtolls';
      }, 1500);
    } else {
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode been Unable","success")
      document.title='TextUtils - Light Mode';
      
    }
  }
  return (
    <>
      
      
     
      {/* <BrowserRouter> */}
      <Navbar bg-colo title="TextUtils" mode={mode} togglemode={toggleMode}/>
      <Aleart alert={alert}/>
{/*      
     <Routes>
      <Route path='/' element={ */}
        <Textbar showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>
        {/* } */}
        {/* /> 
      <Route path='/about' element={<About mode={mode}/>}/>
      <Route path='/contact' element={<Contact mode={mode}/>}/>

     </Routes>
      
     </BrowserRouter> */}
    </>
  );
}

export default App;
