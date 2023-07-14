import { Button, Container, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { IconMap } from '/addons/helpers/icon-map';
import { EmptyPreview } from '/views/articles/previews/empty-preview';
import { InputPreview } from '/views/articles/previews/input-preview';
import { LoadingPreview } from '/views/articles/previews/loading-preview';
import { NumberPreview } from '/views/articles/previews/number-preview';
import { UnsavedPreview } from '/views/articles/previews/unsaved-preview';

const PreviewHeader = <Header
  description="Preview of the Cloudscape Addon components."
  variant="h1">
  Addons gallery
</Header>;

export const Preview = () => {
  return <ContentLayout header={PreviewHeader}>
    <SpaceBetween size="l">
      <Container header={
        <Header
          actions={<Button variant="link" href="#/docs/loading-states">Docs</Button>}
          variant="h2">
          Loading states
        </Header>
      }>
        <LoadingPreview />
      </Container>
      <Container
        header={
          <Header
            actions={<Button variant="link" href="#/docs/icon-map">Docs</Button>}
            variant="h2">
            Icon map
          </Header>
        }>
        <IconMap />
      </Container>
      <Container header={
        <Header
          actions={<Button variant="link" href="#/docs/generic-empty">Docs</Button>}
          variant="h2">
          Generic empty and No match
        </Header>
      }>
        <EmptyPreview />
      </Container>
      <Container header={
        <Header
          actions={<Button variant="link" href="#/docs/labeled-number">Docs</Button>}
          variant="h2">
          Labeled number
        </Header>
      }>
        <NumberPreview />
      </Container>
      <Container header={
        <Header
          actions={<Button variant="link" href="#/docs/labeled-input">Docs</Button>}
          variant="h2">
          Labeled input
        </Header>
      }>
        <InputPreview />
      </Container>
      <Container header={
        <Header
          actions={<Button variant="link" href="#/docs/unsaved-changes-modal">Docs</Button>}
          variant="h2">
          Unsaved changes modal
        </Header>
      }>
        <UnsavedPreview />
      </Container>
    </SpaceBetween>
  </ContentLayout>;
};
