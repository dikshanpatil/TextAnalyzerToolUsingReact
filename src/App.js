
import './App.css';
import Navbar from './Components/Navbar';
import InputBox from './Components/InputBox';
import ButtonsFooter from './Components/ButtonsFooter';
import { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    console.log('isnide toggle');
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return(
  <>
    <Navbar textUtils='TextUtils' about='About' mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <InputBox heading='Enter the text to analyze:'  mode={mode} />  
    </div>
  </>
  
);
}
export default App;




