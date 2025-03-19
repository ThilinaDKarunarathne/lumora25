import React, { useState } from 'react';
import Data from './Data'; 

const SlideShow = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleImageChange = (imageNumber) => {
    setCurrentImage(imageNumber);
  };

  return (
    <div className="slideshow-container">
      <div className="image-container">
        {Data.map((datas) => (
          <div key={datas.id} style={{ display: currentImage === datas.id ? 'block' : 'none' }}>
            <h3 className='hintTitle'>{datas.title}</h3>
            <img className='hintImage' src={datas.src} alt={datas.alt} />
            <h4 className='hintSubTitle'>{datas.subTitle}</h4>
            <div className='hintDescription-container'>
              <div>
                {datas.description.split('\n').map((paragraph, index) => (
                  <p className='hintDescription' key={index}>{paragraph}</p>
                ))}
              </div>
          </div>
          </div>
        ))}
      </div>
      <div className="buttons-container">
      {Data.map((datas) => (
        <button 
          key={datas.id} 
          onClick={() => {
           // if (
              //datas.id !== 3 
              //&& datas.id !== 2
              //) 
              //{
              handleImageChange(datas.id);
            //}
          }}
          //disabled={
           // datas.id === 3 
            //|| datas.id === 2
          //} 
        >
          <img src={datas.btn} alt={datas.alt} />
        </button>
      ))}
      
      </div>
    </div>
  );
};

export default SlideShow;
