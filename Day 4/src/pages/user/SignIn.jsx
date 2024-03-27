import  { useState } from 'react';
 // Import your background image
// import '../../assets/css/signin.css'; // Import CSS file for styles

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example, by sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
    setIsSubmitted(true);
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2 className="signin-header">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="input-container">
            <label htmlFor="email" className="signin-label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signin-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="signin-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signin-input"
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        {isSubmitted && (
          <p className="submitted-message">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
}

export default SignIn;
