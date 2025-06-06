import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

const Profile = () => {

  const location = useLocation()
  const user = location.state?.user

  if (!user) {
    return <div className="profile-container">No user data available.</div>
  }

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Account Settings</h2>
      <div className="profile-card">
        <div className="profile-avatar-container">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-avatar"
          />
          <div className="camera-icon">📷</div>
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{user.fullName}</h3>
          <p className="profile-email">{user.emailAddress}</p>
              </div>
              </div>
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
        
      
    </div>
  )
}

export default Profile
