import React, { PropTypes } from 'react';

import classNames from 'classnames';
import SpinnerIcon from 'react-icons/lib/fa/refresh';

import './_style.scss';

const LoadingIndicator = ({ size = '25px', ...other }) => (
  <span
    className={
      classNames(
        'loading-indicator',
        other.className
      )
    }
    style={{
      ...other.style,
      width: size,
      height: size,
    }}
  >
    <SpinnerIcon
      width={size}
      height={size}
      color={other.style && other.style.color}
    />
  </span>
);

LoadingIndicator.propTypes = {
  size: PropTypes.string,
};

export default LoadingIndicator;
