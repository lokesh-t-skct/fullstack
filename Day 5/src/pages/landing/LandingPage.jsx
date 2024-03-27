import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/landingpage.css'; // Assuming you have a separate CSS file for your LandingPage component

function LandingPage(props) {
  return (
    <div className="landing-page">
      <button className="button">Button 1</button>
      <button className="button">Button 2</button>
      <button className="button">Button 3</button>
    </div>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
