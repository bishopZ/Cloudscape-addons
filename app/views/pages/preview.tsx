import { Container, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { GenericError } from '/addons/details/generic-error';
import { LabeledValue } from '/addons/details/labeled-value';
import { LabeledButton } from '/addons/forms/labeled-button';
import { LabeledCheckbox } from '/addons/forms/labeled-checkbox';
import { LabeledMultiselect } from '/addons/forms/labeled-multiselect';
import { LabeledRadioGroup } from '/addons/forms/labeled-radio-group';
import { LabeledSelect } from '/addons/forms/labeled-select';
import { LabeledTextarea } from '/addons/forms/labeled-textarea';
import { LabeledTiles } from '/addons/forms/labeled-tiles';
import { LabeledToggle } from '/addons/forms/labeled-toggle';
import { IconMap } from '/addons/helpers/icon-map';
import { GenericEmpty } from '/addons/tables/generic-empty';

import { EmptyPreview } from '../articles/previews/empty-preview';
import { InputPreview } from '../articles/previews/input-preview';
import { LoadingPreview } from '../articles/previews/loading-preview';
import { NumberPreview } from '../articles/previews/number-preview';
import { UnsavedPreview } from '../articles/previews/unsaved-preview';

export const Preview = () => {
  return <ContentLayout
    header={<Header variant="h1">Addon gallery</Header>}>
    <SpaceBetween size="l">
      <Container header={
        <Header variant="h2">Loading spinner and Dash</Header>
      }>
        <LoadingPreview />
      </Container>
      <Container
        header={
          <Header variant="h2">Icon map</Header>
        }>
        <IconMap />
      </Container>
      <Container header={
        <Header variant="h2">Generic empty and No match</Header>
      }>
        <EmptyPreview />
      </Container>
      <Container header={
        <Header variant="h2">Labeled number</Header>
      }>
        <NumberPreview />
      </Container>
      <Container header={
        <Header variant="h2">Labeled input</Header>
      }>
        <InputPreview />
      </Container>
      <Container header={
        <Header variant="h2">Unsaved changes modal</Header>
      }>
        <UnsavedPreview />
      </Container>
      <LabeledValue label="">test</LabeledValue>
      <LabeledSelect onChange={() => {}} empty={''} />
      <ExternalLink href={''}>Link</ExternalLink>
      <LabeledButton text={'button'} href={'#'} />
      <LabeledTextarea value={''} onChange={() => {}} />
      <LabeledMultiselect selectedOptions={[]} onChange={() => {}} empty={''} />
      <LabeledCheckbox checked={false} onChange={() => {}}>Click me</LabeledCheckbox>
      <LabeledToggle checked={false} onChange={() => {}}>On</LabeledToggle>
      <LabeledRadioGroup value={''} items={[]} onChange={() => {}} />
      <LabeledTiles value={null} items={[]} onChange={() => {}} />
      <GenericEmpty
        title={''}
        description={''}
        buttonName={''}
        onClick={() => {}}
      />
      <GenericError />
    </SpaceBetween>
  </ContentLayout>;
};
