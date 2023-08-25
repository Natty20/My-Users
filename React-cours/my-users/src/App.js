import './App.css';
import List from './UsersList/List'
import { Routes, Route } from 'react-router-dom'
import React from 'react';

import Home from './UsersList/Home'
import Login from './UsersList/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        {/* <Route path={'/tasklist'} element={<Container />} /> */}
        <Route path={'/Login'} element={<Login />} />
        <Route path={'/List'} element={<List />} />
      </Routes>
      {/* <List /> */}
    </>
    
  );
}

export default App;
