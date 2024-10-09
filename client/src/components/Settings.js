import React from 'react';
import './Settings.css';

const Settings = () => {
  const handleLogout = () => {
    // Add your logout functionality here
    console.log('Logging out...');
  };

  const handleChangeLanguage = (language) => {
    // Add functionality to change the app's language
    console.log(`Language changed to ${language}`);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-options">
        <h3>Language Preferences</h3>
        <button onClick={() => handleChangeLanguage('English')}>English</button>
        <button onClick={() => handleChangeLanguage('Spanish')}>Spanish</button>
        <button onClick={() => handleChangeLanguage('French')}>French</button>
      </div>
      <div className="logout-section">
        <h3>Logout</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;
