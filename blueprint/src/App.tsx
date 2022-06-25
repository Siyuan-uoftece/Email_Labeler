import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.scss';
import MainFlow from './MainFlow';
import Header from "./Header"
import StickyHeader from './StickyHeader';


function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes> 
            <Route path="/" element={<MainFlow/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
