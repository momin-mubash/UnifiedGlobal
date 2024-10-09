import React, { useEffect, useState } from 'react';
import '../assets/styles/Navbar.css'; // Custom styles
import axios from 'axios'; // For making API requests
import SettingsDropdown from './dropdown/settingsDropdown';
import DarkMode from './DarkMode';

const Navbar = () => {
  const [user, setUser] = useState(null);  // Store user details
  const [digs, setDigs] = useState([]);    // Store user digs

  useEffect(() => {
    // Fetch user and digs when the component is mounted
    const fetchUserData = async () => {
      try {
        // Assuming you have a route to fetch the logged-in user's data
        const response = await axios.get('/api/users/me');  // Replace with your API
        setUser(response.data.user);
        setDigs(response.data.digs);  // Assuming the API sends user's digs too
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <nav className="navbar sticky">
      <div className="navbar-logo">
        <h1 style={{ fontFamily: 'Georgia, serif' }}>UnifiedGlobal</h1>
      </div>
      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Search articles..." />
      </div>
      <div className="navbar-right">
        {user ? (
          <div className="profile-dropdown">
            <button>{user.name}</button> {/* Display the real user's name */}
            <div className="dropdown-content">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <ul>
                {digs.length > 0 ? (
                  digs.map((dig, index) => (
                    <li key={index}>{dig.name}</li> // Display the user's digs
                  ))
                ) : (
                  <li>No Digs Available</li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <button className='login'>Login</button> /* if the user is visiting the website for the first time*/
        )}
        <SettingsDropdown />
        <DarkMode />

      </div>
    </nav>
  );
};

export default Navbar;




