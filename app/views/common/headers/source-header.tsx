import { Button, Header, Icon, Popover, StatusIndicator } from '@cloudscape-design/components';
import React from 'react';

type Props = {
  source?: React.ReactNode
}

export const SourceHeader = (props: Props) => {
  const { source } = props;
  return <Header
    variant="h2"
    actions={
      <Popover
        dismissButton={false}
        position="top"
        size="small"
        triggerType="custom"
        content={
          <StatusIndicator type="success">
            Copied
          </StatusIndicator>
        }>
        <Button
          onClick={() => {
            void navigator.clipboard.writeText(source as string);
          }}
          iconName="copy">
          Copy
        </Button>
      </Popover>
    }>
    <>Source code</>
    <>&nbsp;</>
    <Icon name="script" size="medium" />
  </Header>;
};
