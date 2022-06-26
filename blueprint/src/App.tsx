import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.scss';
import MainFlow from './MainFlow';
import Logo from "./Logo"
import Header from "./Header"
import StickyHeader from './StickyHeader';
import sunlifeLogo from "./sunlife3.jpg";


function App() {
  return (
    <BrowserRouter>
      {/* <a href="/"> <Logo /></a> */}
      <div>
          <Routes> 
            <Route path="/" element={<MainFlow/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
