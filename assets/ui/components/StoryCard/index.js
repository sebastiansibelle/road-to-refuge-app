import React, { PropTypes } from 'react';
import classNames from 'classnames';
import reactCSS from 'reactcss';

import './_style.scss';

const StoryCard = ({
  isDisabled,
  isSelected,
  isLoading,
  onClick,
  name,
  location,
  imageUrl,
  look,
  ...other,
}) => {
  const styles = reactCSS({
    default: {
      image: {
        backgroundImage: `url(${imageUrl})`
      },
    },
  }, this);

  return (
    <div
      {...other}
      onClick={(e) => { isDisabled ? e.preventDefault() : onClick(e); } }
      style={styles.image}
      className={
        classNames(
          'storyCard',
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
    >
      <span className="storyCard__name">{name}</span>
      <span className="storyCard__location">{location}</span>
    </div>
  );
};

StoryCard.propTypes = {
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  look: PropTypes.string,
};

export default StoryCard;
