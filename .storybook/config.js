import { configure, setAddon } from '@storybook/vue';

function loadStories() {
  const req = require.context('../src/stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
