import { Box, Container, ContentLayout, ExpandableSection, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

/* eslint-disable max-lines-per-function */
export const Docs = () => {
  return <ContentLayout
    header={
      <Header
        variant="h1"
        description="An overview of Cloudscape Addons, how to use them, basic examples and more.">
        Getting started
      </Header>
    }>
    <SpaceBetween size="m">
      <Container>
        <ExpandableSection headerText={
          <Box variant="h4" tagOverride="strong">
          What is Cloudscape?
          </Box>
        }>
          <Box variant="p">
          Cloudscape is
            <ExternalLink href="https://cloudscape.design/">an open source design system</ExternalLink>
          released by Amazon. Cloudscape offers user interface guidelines, front-end components, design resources,
          and development tools for building intuitive, engaging, and inclusive user experiences at scale.
          </Box>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection headerText={
          <Box variant="h4" tagOverride="strong">
          What is Cloudscape Addons?
          </Box>
        }>
          <Box variant="p">
          Cloudscape Addons is an exciting addition to Amazon's Cloudscape design system.
          Check out the <Link href="#/blog/gallery">Gallery</Link> to see the Addons in action.
          </Box>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection headerText={
          <Box variant="h4" tagOverride="strong">
           How can I use the Addons?
          </Box>
        }>
          <ol>
            <li>
            First, use the <Link href="#/">Browse</Link> or <Link href="#/blog/search">Search</Link> pages
            to locate a component that might work well for you and your team.</li>
            <li>
            Copy the source code for the component into a file in your code base.
            Ensure that the file runs with your build system. The Cloudscape Addons
            require React and Typescript.
            </li>
            <li>
            Create an example implementation of the new component and share it
            with your team. Discuss that advantages of maintaining this shared
            component. Add any features that your team wants or needs.
            </li>
          </ol>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection headerText={
          <Box variant="h4" tagOverride="strong">
          Where's the repo?
          </Box>
        }>
          <Box variant="p">
          We do have plans to move Cloudscape Addons into a cerntralized revision
          manager such as Github. But, for now, these components are meant to be maintained
          by each team that adopts them.
          </Box>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection headerText={
          <Box variant="h4" tagOverride="strong">
          Community: How can I get involved?
          </Box>
        }>
          <ul>
            <li>
              Our <Link href="#/">community blog</Link> updates every two weeks with new articles
              and components about Cloudscape and other design systems.
            </li>
            <li>
              When we establish a version controlled repository, we will
              accept community contributions in the form of pull requests.
            </li>
            <li>
              You can always<ExternalLink href="https://www.stellarelements.com/contact">drop us a line.</ExternalLink>
            </li>
          </ul>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection headerText={
          <Box variant="h4" tagOverride="strong">
          What browsers are supported?
          </Box>
        }>
          <Box variant="p">
        We support the latest 3 major versions of these browsers for desktop.
          </Box>
          <ul>
            <li>Mozilla Firefox</li>
            <li>Google Chrome</li>
            <li>Microsoft Edge</li>
            <li>Apple Safari for macOS</li>
          </ul>
          <Box variant="p">
        We do not support Microsoft Internet Explorer or mobile browsers.
        We support all viewport sizes across desktop browsers.
          </Box>
        </ExpandableSection>
      </Container>
    </SpaceBetween>
  </ContentLayout>;
};
