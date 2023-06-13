import { Box } from '@cloudscape-design/components';
import React from 'react';

type KeyValueProps = {
  label: React.ReactNode
  children: React.ReactNode | React.ReactNode[]
}

export const KeyValue = ({ label, children }: KeyValueProps) =>
  <div>
    <Box variant="awsui-key-label">{label}</Box>
    <div>{children}</div>
  </div>;

