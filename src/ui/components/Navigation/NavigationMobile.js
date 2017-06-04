import React from 'react';

import "./_style.scss";

const NavigationMobile = ({}) => {
  return (
    <div id="navigation-mobile" className="navigation-mobile" style={{display: 'none'}}>
      <a href="/">Home</a>
      <a href="/events">Events</a>
      <a href="/knowledge">Knowledge</a>
      <a href="/get-involved">Get Involved</a>
      <a href="/blog">Blog</a>
      <a href="/donate">Donate</a>
      <a href="/" id="hideNav">Close Menu</a>
    </div>
  );
};

export default NavigationMobile;