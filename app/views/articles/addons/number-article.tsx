import { Box, Container, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

import { PreviewHeader } from '../../common/headers/preview-header';
import { NumberPreview } from '../previews/number-preview';

/* eslint-disable max-lines-per-function */
export const NumberArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <SourceCodeSection source={`import type { BoxProps } from '@cloudscape-design/components';
import { Box, FormField } from '@cloudscape-design/components';
import React from 'react';

import { Dash, LoadingSpinner } from '/addons/details/loading';
import { formfieldStrings } from '/addons/helpers/i18n-helpers';

type Props = {
  label: React.ReactNode
  number?: number | React.ReactNode
  status?: 'info' | 'error' | 'success' | 'inactive'
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  stretch?: boolean
  loading?: boolean
}

export const LabeledNumber = (props: Props) => {
  const {
    loading = false,
    label, number, status,
    constraint, description, error, info, secondaryControl,
    stretch,
  } = props;

  let color: BoxProps.Color = 'text-status-info';
  switch (status) {
    case 'error': color = 'text-status-error'; break;
    case 'success': color = 'text-status-success'; break;
    case 'inactive': color = 'text-status-inactive'; break;
  }

  return <FormField
    label={label}
    constraintText={constraint}
    description={description}
    errorText={error}
    info={info}
    secondaryControl={secondaryControl}
    stretch={stretch}
    i18nStrings={formfieldStrings}>
    <Box
      fontSize={loading ? undefined : 'display-l'}
      color={color}>
      {loading
        ? <LoadingSpinner />
        : number ?? <Dash />}
    </Box>
  </FormField>;
};`} />
    <Container
      media={makeHeaderImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png')}
      header={<Header variant="h2">
      Introducing LabeledNumber
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          Most of the labeled addons are designed to add labels when a form field
          is used in a form. There are other times labels are handy as well, such as
          on a Details page or a
          <ExternalLink href="https://cloudscape.design/examples/react/dashboard.html">
          Dashboard page.
          </ExternalLink>
        </Box>
        <Box variant="p">
          LabeledNumber is the component needed to create the pattern shown in
          Cloudscape Demos. It also simplifies the interface for coloring the number
          shown.
        </Box>
        <pre><code className="language-javascript">{`type Props = {
  status?: 'info' | 'error' | 'success' | 'inactive'
}

let color: BoxProps.Color = 'text-status-info';
switch (status) {
  case 'error': color = 'text-status-error'; break;
  case 'success': color = 'text-status-success'; break;
  case 'inactive': color = 'text-status-inactive'; break;
}

<Box color={color}>
  {number}
</Box`}</code></pre>
        <Box variant="p">
          LabeledNumber also creates a loading and empty state for the number
          property, using the
          &nbsp;<Link href="/docs/loading-states">Loading spinner and Dash addons</Link>.
        </Box>
        <pre><code className="language-javascript">{`
type Props = {
  loading?: boolean
}

const {
  loading = false,
} = props;

<Box fontSize={loading ? undefined : 'display-l'}>
  {loading
    ? <LoadingSpinner />
    : number ?? <Dash />}
</Box>`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container
      header={<PreviewHeader />}>
      <NumberPreview />
    </Container>
  </SpaceBetween>;
};
