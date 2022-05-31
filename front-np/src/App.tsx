import React, { FC } from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import { Route } from 'react-router-dom';
import './App.css';
const  App:FC = () =>
{
return ( 
  <>
      
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
      </Routes>

  </>
  );
}
export default App;
