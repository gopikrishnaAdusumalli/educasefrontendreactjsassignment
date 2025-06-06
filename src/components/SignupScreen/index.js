import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

const SignupScreen = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    areYouAgency: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const isFormValid = Object.values(formData).every(val => val.trim() !== '')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newContact = {
      id: uuidv4(),
      ...formData,
    }

    // Navigate to profile and pass user data via state
    navigate('/profile', { state: { user: newContact } })

    // Optional: Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      password: '',
      companyName: '',
      areYouAgency: '',
    })
  }

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create your <br /> PopX account</h1>
      <p className="signup-subtitle">
        Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
      </p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">Full Name*</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="signup-input"
        />

        <label className="signup-label">Phone Number*</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="signup-input"
        />

        <label className="signup-label">Email Address*</label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Enter email address"
          className="signup-input"
        />

        <label className="signup-label">Password*</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="signup-input"
        />

        <label className="signup-label">Company Name*</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          className="signup-input"
        />

        <label className="signup-label">Are you an agency?*</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="areYouAgency"
              value="Yes"
              checked={formData.areYouAgency === 'Yes'}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="areYouAgency"
              value="No"
              checked={formData.areYouAgency === 'No'}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          type="submit"
          className="signup-button"
          disabled={!isFormValid}
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupScreen
