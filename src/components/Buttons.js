import React from 'react';

export default function Buttons() {
  return (
    <div className="info__buttons">
      <ul className="info__buttons-items">
        <li className="info__buttons-item">
          <i className="fa-solid fa-envelope btn-link"></i>
          <a href="#" className="btn btn__primary">
            Email
          </a>
        </li>
        <li className="info__buttons-item">
          <i className="fa-brands fa-linkedin btn-link"></i>
          <a href="#" className="btn btn__secondary">
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}
