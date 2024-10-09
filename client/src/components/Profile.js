import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [digs, setDigs] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/me');
        setUser(response.data.user);
        setDigs(response.data.digs);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile">
      {user ? (
        <>
          <h2>{user.name}'s Profile</h2>
          <p>Email: {user.email}</p>
          <h3>Your Digs:</h3>
          <ul>
            {digs.map(dig => (
              <li key={dig._id}>{dig.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
