import React, { useState } from 'react'
import { createContext } from 'react';
import { UserContext } from './AppContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const handleLogin = (authUser) => {
      setUser(authUser);
    }
    
    const contextValue = {
      user,
      handleLogin
    }

    return (
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    );
  };

export default AuthProvider;