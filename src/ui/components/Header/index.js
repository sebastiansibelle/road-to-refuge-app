import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import NavigationMobile from '../Navigation/NavigationMobile';

import "./_style.scss";

const Header = ({}) => {
  return (
    <div>
      <NavigationMobile />
      <header role="banner" className="banner">
        <span className="banner__hamburger">Menu</span>
        <div className="banner__logo">
          <Logo logoSrc="http://placehold.it/180x40/00657B/ffffff"/>
        </div>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;