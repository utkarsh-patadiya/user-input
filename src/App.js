import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/User';
import Dashboard from './components/Dashboard';
import User2 from './components/User2';

const App = () => {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path='/user' element={<User />} />
        <Route 
          path='/user2' 
          element={<User2 setUserData={setUserData} />} 
        />
        <Route 
          path='/dashboard' 
          element={<Dashboard userData={userData} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
