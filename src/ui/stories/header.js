import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Header from '../components/Header';

storiesOf('Header', module)
  .add('Primary', () => (
    <Header></Header>
  ))
