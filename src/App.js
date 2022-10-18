import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Expense from './pages/Expenses';
import Income from './pages/Income';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>
        <Route exact path='/Income' element={< Income />}></Route>
        <Route exact path='/Expense' element={< Expense />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
