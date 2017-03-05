import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StoryCard from '../components/StoryCard';

storiesOf('StoryCard', module)
  .add('Primary', () => (
    <StoryCard look="primary" onClick={action('buttonClick')} location="Afganistan" name="Ali Waezi" imageUrl="http://placehold.it/320x240/00657B/ffffff"></StoryCard>
  ))
