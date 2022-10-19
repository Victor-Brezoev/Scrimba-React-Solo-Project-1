import React from 'react';
import Buttons from './Buttons';

export default function Info() {
  return (
    <div className="info">
      <div className="info__media">
        <img src="../../assets/Rectangle90.png" alt="person-image" />
      </div>
      <div className="info__author">
        <h3 className="author__name">Laura Smith</h3>
        <p className="author__proffesion">Frontend Developer</p>
        <p className="author__email">laurasmith.website</p>
      </div>
      <Buttons />
    </div>
  );
}
