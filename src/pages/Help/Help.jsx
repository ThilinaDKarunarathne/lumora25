import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="popup-container">
      <button className='helpButton' onClick={togglePopup}>Need Help?</button>
      {showPopup && (
        <div className="popup">
          <span className="close" onClick={togglePopup}>&times;</span>
          <p className='helpParagraph' >If you need help.</p>
          <p className='helpParagraph' >Call the same number and  tell "KHEPERA" and nothing else, Ask your question. You have only one question throughout the game. Use it wisely.</p>
          {/*
            <hr></hr>
            <p className='helpParagraph' >If you found it, take a picture of all the batchmates with it and send it as proves.</p>
          */}
        </div>
      )}
    </div>
  );
};

export default Help;