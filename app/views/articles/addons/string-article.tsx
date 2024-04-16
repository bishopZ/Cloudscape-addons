import { Box, Container, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { addOptional, formatDate, makeCounter } from '/addons/helpers/string-utils';
import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

/* eslint-disable max-lines-per-function */
export const StringArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <SourceCodeSection source={`import { Box } from '@cloudscape-design/components';
import React from 'react';

import { Dash } from '/addons/details/loading';

export const DEFAULT_LOCALE = 'en-us';

export const addOptional = (label: React.ReactNode) => <>
  {label}
  <>&nbsp;</>
  <Box fontSize="heading-s" display="inline-block">
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

const units: Record<string, number> = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: 24 * 60 * 60 * 1000 * 365 / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

export const getRelativeTime = (date1: Date, date2 = new Date()) => {
  const elapsed = new Date(date1).valueOf() - date2.valueOf();
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  for (const unit in units) {
    if (Math.abs(elapsed) > units[unit] || unit === 'second') {
      return rtf.format(Math.round(elapsed / units[unit]), unit as Intl.RelativeTimeFormatUnit);
    }
  }
};

export const makeCounter = (selected: number, total: number) => selected > 0
  ? ${'`(${selected}/${total})`'}
  : ${'`(${total})`'};

export const makeS3Location = (location: string) => {
  const parts = location.split('/');
  const bucketName = parts[2];
  let key = '';
  if (parts.length === 4) [key] = parts.slice(-1);
  if (parts.length > 4) key = parts.slice(3, -1).join('/');
  return { key, bucketName };
};
`} />
    <Container
      media={makeHeaderImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png')}
      header={<Header variant="h2">
        Introducing StringUtils
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          String utilities files can turn into a swiss army knife of functions.
          In general, this can be a good thing. It obscures the implementation
          details, in favor of more accurate function names. However, Cloudscape
          is designed to be an localization-friendly design system. They
          provide <ExternalLink href="https://cloudscape.design/get-started/dev-guides/internationalization/">
            built-in internationalization,
          </ExternalLink> and many of the common string utilities do not work
          well with multi-language copy.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        {addOptional('Introducing addOptional')}
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          This helper works well with form field labels, section header and even page headers.
          It very simply adds the word "optional" after the label or title. If you do have your
          content translated, be sure to also translate the word "optional."
        </Box>
        <pre><code className="language-javascript">{`export const addOptional = (label: React.ReactNode) => <>
  {label}
  <>&nbsp;</>
  <Box fontSize="heading-s" display="inline-block">
    <em>
      (optional)
    </em>
  </Box>
</>;`}</code></pre>
        <Box variant="p">
          addOptional is useful in Cloudscape because most form fields have an
          ariaRequired property. Since most form fields are required, the detail of
          filling in the ariaRequired is often overlooked. Rather than asking developers
          to do extra work to support aria, the Labeled components in Addons sets the
          default to required, and they always sets the aria label so that developers
          don't have to remember to do so. addOptional then becomes a nice visual
          indicator of the interconnected nature of required and optional form fields,
          and how that is messaged to <em>all</em> customers.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing formatDate
        &nbsp;<Box fontSize="heading-s" display="inline-block">
          ({formatDate('December 16, 1773')})
        </Box>
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          There are lots of ways to display dates. Cloudscape makes a differentiation
          between absolute and relative dates. Absolute dates should be in the same
          format across the site. Whether they show up in a table cell or on a Dashboard,
          they should be in the same format. The Addon's formatDate helper ensures
          consistent formatting in a way that works with internationalization. It also
          uses the Dash component as a smart fallback.
        </Box>
        <pre><code className="language-javascript">{`export const DEFAULT_LOCALE = 'en-us';

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
};`}</code></pre>
        <Box variant="p">
          But what if we want relative dates? Should we install moment.js?
          These days relative dates are included in the javascript specification,
          with just a little extra finese. Relative time is used for the
          publication date on the <Link href="/">Browse page</Link>.
        </Box>
        <pre><code className="language-javascript">{`export const DEFAULT_LOCALE = 'en-us';

const units: Record<string, number> = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: 24 * 60 * 60 * 1000 * 365 / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

export const getRelativeTime = (date1: Date, date2 = new Date()) => {
  const elapsed = new Date(date1).valueOf() - date2.valueOf();
  const rtf = new Intl.RelativeTimeFormat(DEFAULT_LOCALE, { numeric: 'auto' });
  for (const unit in units) {
    if (Math.abs(elapsed) > units[unit] || unit === 'second') {
      return rtf.format(Math.round(elapsed / units[unit]), unit as Intl.RelativeTimeFormatUnit);
    }
  }
};`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2" counter={makeCounter(14, 39)}>
        Introducing makeCounter
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          In Cloudscape, when you create a Table component, it gets a Header component.
          The Header component has a slot to imput a counter. The idea is to add
          the number of items in the table and the number of selected items, if the
          items are selectable. This helper simply makes an easy and consistent
          way to add those counters.
        </Box>
        <pre><code className="language-javascript">{`export const makeCounter = (selected: number, total: number) => selected > 0
  ? ${'`(${selected}/${total})`'}
  : ${'`(${total})`'};`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing makeS3Location
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          One stunning aspect of Cloudscape is
          the <ExternalLink href="https://cloudscape.design/components/s3-resource-selector/">
            S3 Reource Selector.
          </ExternalLink> It has a myriad of uses and built-in functionality, but
          the feature come at the cost of a rather complicated setup process.
          If you do want to use S3 with Cloudscape, this helper
          converts an S3 uri, such as s3://bucket/prefix/object, into S3 location
          object as defined by the AWS SDK.
        </Box>
        <pre><code className="language-javascript">{`export const makeS3Location = (uri: string) => {
  const parts = uri.split('/');
  const bucketName = parts[2];
  let key = '';
  if (parts.length === 4) [key] = parts.slice(-1);
  if (parts.length > 4) key = parts.slice(3, -1).join('/');
  return { key, bucketName };
};`}</code></pre>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
