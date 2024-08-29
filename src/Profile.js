import React, { useEffect, useState } from 'react';

export default function Profile() {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        // Retrieve the form data from localStorage
        const savedData = localStorage.getItem('formData');
        if (savedData) {
          setProfileData(JSON.parse(savedData));
        }
      }, []);
  return (
    <div className="Profile">
    <h1>User Profile</h1>
    <p><strong>Username:</strong> {profileData.username}</p>
    <p><strong>Email:</strong> {profileData.email}</p>
    <p><strong>Occupation:</strong> {profileData.occupation}</p>
    <p><strong>Gender:</strong> {profileData.gender}</p>
    <p><strong>Languages:</strong> {profileData.languages && profileData.languages.join(', ')}</p>
  </div>
  )
}
