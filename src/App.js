import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Preferences from './components/Preferences';
import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'

import useToken from "./useToken";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
 
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login/>} />
            
            <Route element={ <ProtectedRoute user={""} /> }>
                  <Route path="/a-propos" exact element={<About />} />
                  <Route path="/news" exact element={<News />} />
              </Route>
            <Route path="/preferences" exact element={<Preferences/>} />
                
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
