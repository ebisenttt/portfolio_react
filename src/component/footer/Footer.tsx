import React from 'react';
import { useDeviceType } from "context/MediaQuery";
import './Footer.scss';

function Footer() {
  const { isMobile } = useDeviceType();
  const className = isMobile ? 'footer-for-mobile' : 'footer-for-pc';
  return (
    <footer className={className}>
      <div id="copyright-container">
        <p>©2021 ebisenttt</p>
      </div>
    </footer>
  )
}

export default Footer;