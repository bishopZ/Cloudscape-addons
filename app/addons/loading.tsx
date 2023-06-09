import { Spinner } from '@cloudscape-design/components';
import React from 'react';

export const Dash = () => <>&ndash;</>;

export const LoadingSpinner = () => <>
  <Spinner />
  <>&nbsp;</>
  Loading
</>;
