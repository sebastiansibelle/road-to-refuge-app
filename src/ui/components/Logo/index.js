import React, { PropTypes } from 'react';

import classNames from 'classnames';

import './_style.scss';

const Logo = ({ width = '180px', height = '40px', logoSrc = '../images/logo.png', ...other }) => (
  <span
    className={
      classNames(
        'logo',
        other.className
      )
    }
    style={{
      ...other.style,
      width: width,
      height: height
    }}
  >
    <img
      width={width}
      height={height}
      color={other.style && other.style.color}
      src={logoSrc}
    />
  </span>
);

Logo.propTypes = {
  size: PropTypes.string,
  logoSrc: PropTypes.string
};

export default Logo;
