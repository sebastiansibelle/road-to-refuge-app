import React, { PropTypes } from 'react';
import Tooltip from 'react-tooltip';
import classNames from 'classnames';
import reactCSS from 'reactcss';

import LoadingIndicator from '../LoadingIndicator';

import './_style.scss';

const Button = ({
  isDisabled,
  isSelected,
  isLoading,
  loadingMessage,
  children,
  onClick,
  type = 'button',
  look,
  showTooltip = false,
  errorMessage,
  ...other,
}) => {
  const style = reactCSS({
    default: {
      loadingIndicator: {
        marginLeft: '.5em',
        color: 'white',
      },
    },
    small: {
      loadingIndicator: {
        marginLeft: '0',
        color: '#1FA8DF',
      },
    },
  }, look);

  return (
    <span>
      <button
        {...other}
        type={type}
        onClick={(e) => { isDisabled ? e.preventDefault() : onClick(e); } }
        className={
          classNames(
            'button',
            other.className,
            {
              '--selected': isSelected,
              '--disabled': isDisabled,
              '--loading': isLoading,
            },
            // support combinations eg.: look="secondary small"
            look ? look.split(' ').map(l => `--${l}`) : undefined,
          )
        }
        data-tip
        data-multiline
        data-for={errorMessage ? 'buttonErrorMessage' : ''}
      >
        {
          isLoading ?
            <span>
              {loadingMessage}
              <LoadingIndicator
                style={style.loadingIndicator}
                size={look === 'small' ? '18px' : '25px'}
                className="button__loading-indicator"
              />
            </span>
          :
          children
        }
      </button>
      {
        showTooltip && errorMessage ?
          <Tooltip id="buttonErrorMessage" type="info">
            {errorMessage}
          </Tooltip>
        : null
      }
    </span>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  look: PropTypes.string,
  errorMessage: PropTypes.string,
  showTooltip: PropTypes.bool,
};

export default Button;
