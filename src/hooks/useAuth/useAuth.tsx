// useAuth.js
import { useState, useEffect } from 'react';
import decodeJWT from 'utils/decodeJWT';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('accessToken') || '';

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = decodeJWT(token);
        setUser(decodedToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Token inválido:', error);
        setIsAuthenticated(false);
      }
    }
  }, []);

  const login = (paramToken:string) => {
    localStorage.setItem('accessToken', paramToken);
    const decodedToken = decodeJWT(paramToken);
    setUser(decodedToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated, user, login, logout, token,
  };
};

export default useAuth;
