import '@cloudscape-design/global-styles/index.css';

import { Container, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { CodeDisplay } from '/addons/details/code-display';
import { ExternalLink } from '/addons/details/external-link';
import { GenericError } from '/addons/details/generic-error';
import { KeyValue } from '/addons/details/key-value';
import { LabeledNumber } from '/addons/details/labeled-number';
import { Dash, LoadingSpinner } from '/addons/details/loading';
import { LabeledButton } from '/addons/forms/labeled-button';
import { LabeledCheckbox } from '/addons/forms/labeled-checkbox';
import { LabeledInput } from '/addons/forms/labeled-input';
import { LabeledMultiselect } from '/addons/forms/labeled-multiselect';
import { LabeledRadioGroup } from '/addons/forms/labeled-radio-group';
import { LabeledSelect } from '/addons/forms/labeled-select';
import { LabeledTextarea } from '/addons/forms/labeled-textarea';
import { LabeledTiles } from '/addons/forms/labeled-tiles';
import { LabeledToggle } from '/addons/forms/labeled-toggle';
import { UnsavedChanges } from '/addons/forms/unsaved-changes';
import { IconMap } from '/addons/helpers/icon-map';
import { GenericEmpty } from '/addons/tables/generic-empty';

import { LoadingPreview } from '../articles/loading-preview';
import { InputPreview } from '../articles/input-preview';

export const Preview = () => {
  return <ContentLayout
    header={
      <Header variant="h1">Component gallery</Header>
    }>
    <SpaceBetween size="m">
      <Container
        header={
          <Header variant="h2">{'<IconMap />'}</Header>
        }>
        <IconMap />
      </Container>
      <Container header={
        <Header variant="h2">
          {'<LoadingSpinner /> and <Dash />'}
        </Header>
      }>
        <LoadingPreview />
      </Container>
      <Container header={
        <Header variant="h2">
          {'<LabeledInput />'}
        </Header>
      }>
        <InputPreview />
      </Container>
      <br />
      <LabeledSelect onChange={() => {}} empty={''} />
      <br />
      <ExternalLink href={''}>Link</ExternalLink>
      <br />
      <LabeledNumber label={''} />
      <br />
      <LabeledButton text={'button'} href={'#'} />
      <br />
      <LabeledTextarea value={''} onChange={() => {}} />
      <br />
      <CodeDisplay value={''} />
      <br />
      <LabeledMultiselect selectedOptions={[]} onChange={() => {}} empty={''} />
      <br />
      <LabeledCheckbox checked={false} onChange={() => {}}>Click me</LabeledCheckbox>
      <br />
      <LabeledToggle checked={false} onChange={() => {}}>On</LabeledToggle>
      <br />
      <LabeledRadioGroup value={''} items={[]} onChange={() => {}} />
      <br />
      <LabeledTiles value={null} items={[]} onChange={() => {}} />
      <br />
      <UnsavedChanges visible={false} onDismiss={() => {}} onLeave={() => {}} />
      <br />
      <GenericEmpty
        title={''}
        description={''}
        buttonName={''}
        onClick={() => {}}
      />
      <br />
      <GenericError />
      <KeyValue label={'label'}>Value</KeyValue>
    </SpaceBetween>
  </ContentLayout>;
};
