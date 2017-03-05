import { configure } from '@kadira/storybook';
import path from 'path';

function loadStories() {
  // Common Components
  require('../assets/ui/stories/');
  require('../assets/ui/base/index.scss');
}

configure(loadStories, module);
