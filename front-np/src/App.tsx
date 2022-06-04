import React, { FC } from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import { Route } from 'react-router-dom';
import RestPage from './Pages/RestZonePage';
import { BrowserRouter as Router } from 'react-router-dom';

const  App:FC = () =>
{
return ( 
  <>
      <Router>
        <Routes>
          
          <Route path="/" element={ <HomePage/> }/>

          <Route path="/MysqlApp/Home" element={<RestPage/>}/>
          
        </Routes>
      </Router>

  </>
  );
}
export default App;
