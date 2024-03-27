import React, { useState, useEffect } from 'react';
import '../../assets/css/forgotpassword.css';

const ForgotPassword = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [email, setEmail] = useState('');

    // Set fadeIn to true after component mounts
    useEffect(() => {
        setFadeIn(true);
    }, []);

    const handleBack = () => {
        setFadeIn(false);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle the submission, such as sending a reset password email
        console.log("Submit email:", email);
        // Reset the email field after submission if needed
        setEmail('');
    };

    return (
        <div className={`forgot-password-container ${fadeIn ? 'fade-in' : ''}`}>
            <div className="background-image" />
            <div className="content">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={handleBack}>Go Back</button>
            </div>
        </div>
    );
}

export default ForgotPassword;
