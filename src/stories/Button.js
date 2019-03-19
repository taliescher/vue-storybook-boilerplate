import { storiesOf } from '@storybook/vue';

import Button from '@/components/Button/Button';

storiesOf('Button', module).add('to Storybook', () => ({
  components: { Button },
  template: '<Button/>'
}));
