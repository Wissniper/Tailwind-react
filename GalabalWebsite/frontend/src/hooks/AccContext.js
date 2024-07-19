import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AccContext = createContext();

export const useAcc = () => useContext(AccContext);

export const AccProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user', {
          params: {
            user_id: user  // Pass user_id here if needed
          }
        });
        const userData = response.data;
        setUser(userData); // Update user state with fetched data
        console.log(user)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Fetch user data when component mounts
  }, [user]); // Empty dependency array ensures useEffect runs only once after mount

  const value = { user, setUser };

  return <AccContext.Provider value={value}>{children}</AccContext.Provider>;
};
