import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../components/Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button look="primary" onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Primary Selected', () => (
    <Button look="primary" isSelected onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Primary Disabled', () => (
    <Button look="primary" isDisabled onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Primary Loading', () => (
    <Button look="primary" isLoading isDisabled onClick={action('buttonClick')}>
      Get involved!
    </Button>
  ))
  .add('Secondary', () => (
    <Button look="secondary" onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Secondary Selected', () => (
    <Button look="secondary" isSelected onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Secondary Disabled', () => (
    <Button look="secondary" isDisabled onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Secondary Loading', () => (
    <Button look="secondary" isLoading isDisabled onClick={action('buttonClick')}>
      Get involved!
    </Button>
  ))
