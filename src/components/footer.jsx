import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: 100
  }}>
    <span>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</span>
  </footer>
);

export default Footer;