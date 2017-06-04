import React, { PropTypes } from 'react';

import './_style.scss';

import StoryCard from '../StoryCard';

const Carousel = ({data}) => {

  const cards = data.map(
    ({ location, name, imageUrl }) =>
      <StoryCard
        look="primary"
        location={location}
        name={name}
        imageUrl={imageUrl}
      />
  );

  return (
    <div className="carousel">
      { cards }
    </div>
  )
};

Carousel.propTypes = {
  data: PropTypes.object,
};


export default Carousel;