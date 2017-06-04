import { configure } from '@kadira/storybook';

import path from 'path';

function loadStories() {
  require('../src/ui/stories');
  require('../src/ui/base/index.scss');
}

configure(loadStories, module);
