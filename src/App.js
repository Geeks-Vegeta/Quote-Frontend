import './App.css';
import React, {useState, useReducer, createContext} from "react";   
import "./App.css";
import Pattern from './containers/Pattern';
import { BrowserRouter } from 'react-router-dom';
import {reducer, initialState} from "./reducer/loginReducer";

const LoginContext = createContext();
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <LoginContext.Provider value={{state, dispatch, isDarkMode, setIsDarkMode}}>
      <div className={isDarkMode?'dark-mode':'light-mode'}>
        <BrowserRouter>
        <Pattern/>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
    </>
  );
}

export default App;
export {LoginContext};