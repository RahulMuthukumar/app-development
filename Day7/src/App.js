import React from 'react';
import Login from './login';
import { Logout, SomeOtherComponent } from './Logout';

import Register from './Registration';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import DropdownMenu from './home';

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login/>} />
          <Route path="/signup"  element={<Register />} />
          <Route path="/home"  element={<DropdownMenu />} />
        </Routes>
      </BrowserRouter>

      <h1>Welcome to My App</h1>
          <Logout />
      
    </div>
   
     
        
   
  );
};

export default App;
