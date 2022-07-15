import { useContext, createContext, useState, useLayoutEffect } from 'react';
import axios from 'axios';

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
      axios.defaults.headers.common.Authorization = 'Bearer ' + token;
    }
  }, []);

  const signIn = async (email, password) => {
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

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = null;
  };

  const value = {
    token,
    signIn,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default useAuth;
