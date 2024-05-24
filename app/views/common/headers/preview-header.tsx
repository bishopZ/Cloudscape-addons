import { Button, Header, Icon, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

export const PreviewHeader = () => {
  const isDocs = location.hash.indexOf('/docs') !== -1;

  return <Header
    variant="h2"
    actions={<SpaceBetween size="s" direction="horizontal">
      {/* <Button variant="link" href="/articles/gallery">
        Addon gallery
      </Button>
      {!isDocs && <Button
        variant="link"
        href={window.location.hash.replace('articles', 'docs')}>
        Component documentation
      </Button>} */}
    </SpaceBetween>}>
    Preview
    <>&nbsp;</>
    <Icon name="multiscreen" size="medium" />
  </Header>;
};
