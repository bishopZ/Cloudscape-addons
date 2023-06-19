import { Header, Icon } from '@cloudscape-design/components';
import React from 'react';

export const PreviewHeader = () => {
  return <Header variant="h2">
    Preview
    <>&nbsp;</>
    <Icon name="multiscreen" size="medium" />
  </Header>;
};
