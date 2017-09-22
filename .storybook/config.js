import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  require('../src/components/RxItemComponent.story');
  require('../src/components/RxComponent.story');
  require('../src/components/OrderRxFormComponent.story');
  require('../src/components/RxPadComponent.story');
  require('../src/components/OrderRxPageLayout.story');
  require('../src/components/AddRxComponent.story');
  require('../src/components/EditRxComponent.story');

  // Require your stories here...
}
configure(loadStories, module);
