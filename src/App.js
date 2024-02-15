import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router , Routes, Route , Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TextForm from './components/TextForm/TextForm';
import About from './components/About/About';
import Alert from './components/Alert';



function App() {

  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
     showAlert('Dark mode enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Light mode enabled','success')
    }
  }

  const showAlert =(message, type) =>{
    setAlert({
 msg : message,
 type : type,
})

setTimeout(() => {
  setAlert(null);
},1500)
  }
 
  return (
    <div className="App">
      <Router>
    <NavBar mode={mode}  toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    <div className = 'container my-7'>
    
    
      <Routes>
        <Route path ='/' element={<TextForm showAlert ={showAlert} mode={mode}  toggleMode={toggleMode}/>}/>
        <Route path ='/about' element={<About/>}/>
      </Routes>
    
    </div>
    </Router>
    </div>
  );
}

export default App;
