
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {MainLoginContainer,LoginFormContainer} from './styledComponents'

import './index.css'

const LoginScreen = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate login success
    navigate('/account-settings');
  };
  return(


  <MainLoginContainer>
    
    <LoginFormContainer onSubmit={handleSubmit}>
      <h2>Signin to your <br /> PopX account</h2>
      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className = "email-text"
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className = "password-text"
        required
      />
      <button type="submit" className = "login-button">Login</button>
    </LoginFormContainer>

    </MainLoginContainer>


    )
}

export default LoginScreen