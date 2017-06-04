import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Navigation from '../components/Navigation';

storiesOf('Navigation', module)
  .add('Primary', () => (
    <Navigation logo="http://placehold.it/320x240/00657B/ffffff"/>
  ));
