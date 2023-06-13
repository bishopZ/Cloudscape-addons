import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { InputPreview } from './input-preview'

export const InputArticle = () => {
  
  
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll()
    }, 0)  
  }, [])

  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
      Introducing LabeledInput
      </Header>}>
      <Box variant="p">
        The LabeledInput component is the first of a series of Labeled components.
        Input boxes can be used for many things and all design systems aim to be
        versitile, so that the components can be used in any situation.
      </Box>
      <Box variant="p">
        However, the vast majority of uses of an
        <ExternalLink href="">Input component</ExternalLink>
        is in the context of a form.
        When an Input is in a form, it should have a label to comply with
        accessibility and usablity best practices. Labels are provided by the
        <ExternalLink href="">FormField component</ExternalLink>.
      </Box>
      <Box variant="p">
        Since the main use of an Input is in combination with a FormField, we
        present the Labeled component as a unified interface for Inputs in the
        context of a form.
      </Box>
      <Box variant="p">
        Over the coming months, Cloudscape Addons will release similar Labeled
        components for other form fields. These labeled components set
        smart default, and provide a unified interface across all form field types.
      </Box>
    </Container>
    <Container header={
      <Header variant='h2'>Input type map</Header>
    }>
      <Box variant="p">
        As a design system, Cloudscape aims to provide open access to the HTML
        interface provided by the standards and adoption. It provides many options
        for the type and inputmode attributes of the input element.
      </Box>
      <Box variant="p">
        Yet, those two properties often go togeather into only a few common 
        conbinations. The LabeledInput component creates a single interface for
        the mapping of these two fields. The mapping can always be expanded for
        more unusual use cases.
      </Box>
      <pre><code className="language-javascript">{`type Map = Record<string, [InputProps.Type, InputProps.InputMode]>

const modeMap: Map = {
  text: ['text', 'text'],
  password: ['password', 'text'],
  search: ['search', 'search'],
  decimal: ['number', 'decimal'],
  number: ['number', 'numeric'],
  tel: ['text', 'tel'],
  email: ['email', 'email'],
  url: ['url', 'url']
};
type Props = {
  mode?: keyof typeof modeMap
  ...
}

<Input
  type={modeMap[mode][0]}
  inputMode={modeMap[mode][1]}
  ...
/>

`}</code></pre>
    </Container>
    <Container
      header={
        <Header variant="h2">Smart defaults</Header>
      }>
      <Box variant="p">
        LabeledInput provide smart defaults for the properties below.
      </Box>
      <pre><code className="language-javascript">
{`label = <>&nbsp;</>,
mode = 'text',
placeholder = 'Enter a value',
step = 1,
optional = false,`}</code></pre>
      <Box variant="p">
        The optional property does two things. It sets ariaRequired, so that 
        developers don't have to remember to do that. It also adds a common
        "optional" flag to the label.
      </Box>
      <pre><code className="language-javascript">
{`const displayLabel = optional
  ? addOptional(label)
  : label;

<FormField
  label={displayLabel}
  ...>
  <Input
  ariaRequired={!optional}
  ...
  />
</FormField>
`}</code></pre>
    </Container>
    <Container
      header={
        <Header variant="h2">Component source code</Header>
      }>
      <pre><code className="language-javascript">
        {`import type { InputProps } from '@cloudscape-design/components';
import { FormField, Input } from '@cloudscape-design/components';
import React from 'react';

import { clearAriaLabel } from '/addons/helpers/a11y-helpers';
import { formfieldStrings } from '/addons/helpers/i18n-helpers';
import { addOptional } from '/addons/helpers/string-utils';
import type { InputChange, KeyDetail } from '/addons/helpers/type-helpers';

type Props = {
  value: string
  onChange: (event: InputChange) => void
  mode?: keyof typeof modeMap
  placeholder?: string
  label?: React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  stretch?: boolean
  optional?: boolean
  disabled?: boolean
  readOnly?: boolean
  autoComplete?: boolean
  spellcheck?: boolean
  step?: number
  onBlur?: () => void
  onFocus?: () => void
  onKeyDown?: (event: KeyDetail) => void
  onKeyUp?: (event: KeyDetail) => void
}

type Map = Record<string, [InputProps.Type, InputProps.InputMode]>

const modeMap: Map = {
  text: ['text', 'text'],
  password: ['password', 'text'],
  search: ['search', 'search'],
  decimal: ['number', 'decimal'],
  number: ['number', 'numeric'],
  tel: ['text', 'tel'],
  email: ['email', 'email'],
  url: ['url', 'url']
};

export const LabeledInput = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    mode = 'text',
    placeholder = 'Enter a value',
    step = 1,
    optional = false,
    value,
    constraint, description, error, info, secondaryControl,
    disabled, stretch, readOnly, autoComplete, spellcheck,
    onBlur, onFocus, onChange, onKeyDown, onKeyUp
  } = props;

  const displayLabel = optional
    ? addOptional(label)
    : label;

  return <FormField
    label={displayLabel}
    constraintText={constraint}
    description={description}
    errorText={error}
    info={info}
    secondaryControl={secondaryControl}
    stretch={stretch}
    i18nStrings={formfieldStrings}>
    <Input
      value={value}
      ariaRequired={!optional}
      autoComplete={autoComplete}
      clearAriaLabel={clearAriaLabel}
      disabled={disabled}
      type={modeMap[mode][0]}
      inputMode={modeMap[mode][1]}
      placeholder={placeholder}
      readOnly={readOnly}
      spellcheck={spellcheck}
      step={step}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    />
  </FormField>;
};`}</code></pre>
    </Container>
    <Container
      header={
        <Header variant='h2'>Preview</Header>
      }>
        <InputPreview />
    </Container>
  </SpaceBetween>;
};
