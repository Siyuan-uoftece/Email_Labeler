import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.scss';
import MainFlow from './MainFlow';
import Header from "./Header"


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/"><Header /></a>
        </header>
        <main>
          <Routes> 
            <Route path="/" element={<MainFlow/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
