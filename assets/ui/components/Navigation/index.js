import React from 'react';

import Button from '../Button';
import Logo from '../Logo';

import "./_style.scss";

const Navigation = ({children}) => {
  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item"><a href="#events" className="navigation__link">Events</a></li>
        <li className="navigation__item"><a href="#knowledge" className="navigation__link">Knowledge</a></li>
        <li className="navigation__item"><a href="#get-involved" className="navigation__link">Get involved</a></li>
        <li className="navigation__item"><a href="#blog" className="navigation__link">Blog</a></li>
        <li className="navigation__item"><Button look="small primary" >Donate</Button></li>
      </ul>
    </nav>
  );
};

export default Navigation;