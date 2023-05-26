import './App.css';
import React, {useState, useReducer, useEffect, createContext} from "react";   
import Pattern from './containers/Pattern';
import { BrowserRouter } from 'react-router-dom';
import {reducer, initialState} from "./reducer/loginReducer";
import {
  MDBContainer
} from 'mdb-react-ui-kit';

const LoginContext = createContext();
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  return (
    <>

  {width < 800?(
        <>
        <MDBContainer fluid className='my-3'>

          <div className="mobile">
            <div className="text-center">
              <img src={process.env.PUBLIC_URL+"quote.png"} alt="image" className='logo-image-size' />
              <br/>
              <span className='img-logo font-weight-bold'>Quoteser </span>
            </div>
            
            <p className="text-center">Application is available</p>
            <p className="text-center">on <a href="https://bit.ly/3Holy55" target="_blank">Android</a> and  <a href="https://bit.ly/3Holy55" target="_blank">ios</a></p>


          </div>
        </MDBContainer>
        
        </>
      ):(
    <LoginContext.Provider value={{state, dispatch, isDarkMode, setIsDarkMode}}>
      <div className={isDarkMode?'dark-mode':'light-mode'}>
        <BrowserRouter>
        <Pattern/>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
    )}
    </>
  );
}

export default App;
export {LoginContext};