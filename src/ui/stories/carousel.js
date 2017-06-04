import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Carousel from '../components/Carousel';

const data = [
  { location: 'Card #1', name: 'Ali Waezi', imageUrl: 'http://lorempicsum.com/futurama/255/200/1' },
  { location: 'Card #1', name: 'Laila Sakini', imageUrl: 'http://lorempicsum.com/futurama/255/200/2' },
  { location: 'Card #1', name: '#9230c0', imageUrl: 'http://lorempicsum.com/futurama/255/200/3' },
];

storiesOf('Carousel', module)
  .add('Primary', () => (
    <Carousel data={data}/>
  ))
