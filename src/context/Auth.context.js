import { useContext, createContext, useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '@mantine/core';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('auth/sign_in', {
        email,
        password,
      });

      setToken(data.token);
      localStorage.setItem('token', data.token);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    token,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default useAuth;
