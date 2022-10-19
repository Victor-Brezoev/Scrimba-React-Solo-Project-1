import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <i className="fa-brands fa-square-twitter fa-2x footer-link"></i>
        </li>
        <li className="footer__list-item">
          <i className="fa-brands fa-square-facebook fa-2x footer-link"></i>
        </li>
        <li className="footer__list-item">
          <i className="fa-brands fa-square-instagram fa-2x footer-link"></i>
        </li>
        <li className="footer__list-item">
          <i className="fa-brands fa-square-github fa-2x footer-link"></i>
        </li>
      </ul>
    </div>
  );
}
