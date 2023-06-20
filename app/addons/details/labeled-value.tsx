import { Box } from '@cloudscape-design/components';
import React from 'react';

type KeyValueProps = {
  label: React.ReactNode
  children: React.ReactNode | React.ReactNode[]
}

export const LabeledValue = ({ label, children }: KeyValueProps) =>
  <Box>
    <Box variant="awsui-key-label">{label}</Box>
    <Box>{children}</Box>
  </Box>;

