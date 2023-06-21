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

export const deslugify = (slug: string) => {
  const words = slug.split('-').join(' ');
  return words.charAt(0).toUpperCase() + words.substring(1).toLowerCase();
};

export const inNotEmpty = (candidate?: string) => {
  if (!candidate || candidate === '') return <Dash />;
  return candidate;
};

const units: Record<string, number> = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: 24 * 60 * 60 * 1000 * 365 / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

export const getRelativeTime = (d1: Date, d2 = new Date()) => {
  const elapsed = new Date(d1).valueOf() - d2.valueOf();
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  for (const unit in units) {
    if (Math.abs(elapsed) > units[unit] || unit === 'second') {
      return rtf.format(Math.round(elapsed / units[unit]), unit as any);
    }
  }
};

export const capitalize = (value: string) => value.replace(value[0], value[0].toUpperCase());
