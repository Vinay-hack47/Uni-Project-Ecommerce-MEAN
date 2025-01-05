import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
