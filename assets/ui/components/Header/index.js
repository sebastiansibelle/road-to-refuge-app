import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';

import "./_style.scss";

const Header = ({children}) => {
  return (
    <header role="banner" className="banner">
      <Logo logoSrc="http://placehold.it/180x40/00657B/ffffff" />
      <Navigation />
    </header>
  );
};

export default Header;