import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CounterPage from './pages/CounterPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    //
    <>
      {/* 최상위 컴포넌트에는 ROUTE정보만 */}
      {/* <Route path="/counter" component={CounterPage} />
      <Route path="/users" component={UsersPage} /> */}
      <Route path="/login" component={LoginPage} />
    </>
  );
}

export default App;
