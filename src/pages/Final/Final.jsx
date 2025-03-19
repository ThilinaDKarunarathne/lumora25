import React from 'react'
import './Final.css';
import ParticleEffect from '../ParticlesEffect/ParticleEffect';
//import item1Img from '../../assets/item1.png';

export default function Final() {
  return (
    <div>
        <ParticleEffect/>
        <div className="title">
          <h1>Congratulations</h1>
        </div>
        <div className="subTitle">
          <p>New Life Awaits</p>
        </div>
        <div className="wrapper">
        <div className="itemContainer">
            <div id="item1" className='item' ></div>
            <div id="item2" className='item' ></div>
            <div id="item3" className='item' ></div>
        </div>
        </div>
    </div>
  )
}
