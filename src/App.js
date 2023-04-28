//import logo from './logo.svg';
import Navbar from './component/Navbar';
import './App.css';
import Textarea from './component/Textarea'; 
 
import Acordian from './component/Acordian';
import React,{useState} from 'react'
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode]=useState('light');  
  const [alert, setAlert] =useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg : message,
    type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
    
  } 

  const Enable=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#164060';
      showAlert(" Dark mode enabled","success:");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert(" light mode enabled","success:");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtiles"  Toggle={Enable}  mode={Mode}/>
    <Alert  Alert={alert}/>
    <div className='container my-2' style={{color: Mode==='dark' ? 'white' : 'black'}}>
    <Routes>
          <Route exact path="/about" element={<Acordian />}>
          </Route>
          <Route exact path="/home" element={<Textarea  showAlert={showAlert} />}>
          </Route>
      </Routes>
    </div> 
    </Router>
    </>
  );
}

export default App;