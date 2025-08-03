import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-dark text-white">
      <p>&copy; {new Date().getFullYear()} Gada Solomon</p>
      <small>“Commit to the Lord whatever you do, and he will establish your plans.” – Proverbs 16:3</small>
    </footer>
  );
};

export default Footer;
