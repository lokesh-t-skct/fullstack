import { useState } from 'react';
import '../../assets/css/signup.css'; // Import CSS file for styles

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    // Reset form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setPhoneNumber('');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup-header">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-container">
            <label htmlFor="email" className="signup-label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="signup-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirmPassword" className="signup-label">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="fullName" className="signup-label">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber" className="signup-label">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
