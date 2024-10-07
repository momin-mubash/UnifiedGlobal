import React, { useState } from 'react';

function SettingsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`settings-dropdown ${isDropdownOpen ? 'active' : ''}`}>
      <button onClick={toggleDropdown}>Settings</button>
      <div className="dropdown-content">
        <button>Translate</button>
        <button>Log out</button>
      </div>
    </div>
  );
}

export default SettingsDropdown;
