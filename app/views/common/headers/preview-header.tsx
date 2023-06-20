import { Button, Header, Icon } from '@cloudscape-design/components';
import React from 'react';

export const PreviewHeader = () => {
  return <Header
    variant="h2"
    actions={
      <Button variant="link" href="#/blog/gallery">See all</Button>
    }>
    Preview
    <>&nbsp;</>
    <Icon name="multiscreen" size="medium" />
  </Header>;
};
