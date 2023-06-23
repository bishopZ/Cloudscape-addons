import { Spinner } from '@cloudscape-design/components';
import React from 'react';

export const Dash = () => <>&ndash;</>;

type Props = { mediaName?: string }

export const LoadingSpinner = ({ mediaName }: Props) => <>
  <Spinner />
  <>&nbsp;Loading {mediaName ?? ''}</>
</>;
