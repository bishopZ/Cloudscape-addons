import { Box } from '@cloudscape-design/components';
import React from 'react';

import { Dash } from '../details/loading';

export const DEFAULT_LOCALE = 'en-us';

export const addOptional = (label: React.ReactNode) => <>
  {label}
  <>&nbsp;</>
  <Box fontSize="heading-s">
    <em>
      (optional)
    </em>
  </Box>
</>;

export const formatDate = (date?: string | Date) => {
  if (!date) return <Dash />;
  const newDate = typeof date === 'string'
    ? new Date(date)
    : date;
  return newDate.toLocaleDateString(DEFAULT_LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const makeCounter = (selected: number, total: number) => selected > 0
  ? `(${selected}/${total})`
  : `(${total})`;

export const makeS3Location = (location: string) => {
  const parts = location.split('/');
  const bucketName = parts[2];
  let key = '';
  if (parts.length === 4) [key] = parts.slice(-1);
  if (parts.length > 4) key = parts.slice(3, -1).join('/');
  return { key, bucketName };
};
