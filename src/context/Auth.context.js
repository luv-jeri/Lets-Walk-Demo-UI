import { useContext, createContext, useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      axios.defaults.headers.common.Authorization = 'Bearer ' + token;

      axios.get('auth/whoami').then((res) => {
        setUser(res.data.data);
      });
    }
  }, []);

  console.log(user);

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

  const join = async (params) => {
    try {
      const { data } = await axios.post('auth/sign_up', {
        ...params,
        phone: `+91${params.phone}`,
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
    join,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default useAuth;
