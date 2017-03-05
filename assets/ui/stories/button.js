import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from '../components/Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('buttonClick')}>Get involved!</Button>
  ))
  .add('Default Selected', () => (
    <Button isSelected onClick={action('buttonClick')}>Get involved!</Button>
  ))
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
  .add('Small', () => (
    <Button look="small" onClick={action('buttonClick')}>Save</Button>
  ))
  .add('Small Loading', () => (
    <Button look="small" isLoading onClick={action('buttonClick')}>Save</Button>
  ))
  .add('Small Selected', () => (
    <Button look="small" isSelected onClick={action('buttonClick')}>Get involved!</Button>
  ));
