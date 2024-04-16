import {
  Box, Button, Container, ContentLayout, ExpandableSection, Header, Link, SpaceBetween
} from '@cloudscape-design/components';
import React, { useState } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { useAppDispatch } from '/data/data-store';
import { changePreference } from '/data/preferences';

/* eslint-disable max-lines-per-function */
export const Docs = () => {
  const [expandAll, setExpandAll] = useState(false);
  const dispatch = useAppDispatch();

  return <ContentLayout
    header={
      <Header
        variant="h1"
        actions={<Button
          variant="primary"
          onClick={() => { setExpandAll(true) }}>
              Expand all
        </Button>}
        info={<Link onFollow={() => {
          dispatch(changePreference({
            name: 'tools',
            value: 'open'
          }));
        }}>
          info
        </Link>}
        description="About Cloudscape">
        Getting started
      </Header>
    }>
    <SpaceBetween size="m">
      <Container>
        <ExpandableSection
          defaultExpanded
          headerText={
            <Box variant="h4" tagOverride="strong">
              What is Cloudscape?
            </Box>
          }>
          <Box variant="p">
          Cloudscape is
            <ExternalLink href="https://cloudscape.design/">an open source design system</ExternalLink>
          released by Amazon. Cloudscape offers user interface guidelines, front-end components, design resources,
          and development tools for building intuitive, engaging, and inclusive customer experiences at scale.
          </Box>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection
          defaultExpanded
          headerText={
            <Box variant="h4" tagOverride="strong">
          What is Cloudscape Addons?
            </Box>
          }>
          <Box variant="p">
          Cloudscape Addons is an exciting addition to Amazon's Cloudscape design system.
          Check out the <Link href="/articles/gallery">Gallery</Link> to see the Addons in action.
          </Box>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection
          defaultExpanded={expandAll}
          headerText={
            <Box variant="h4" tagOverride="strong">
           How can I use the Addons?
            </Box>
          }>
          <ol>
            <li>
            First, use the <Link href="/">Browse</Link> or <Link href="/articles/search">Search</Link> pages
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
        <ExpandableSection
          defaultExpanded={expandAll}
          headerText={
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
        <ExpandableSection
          defaultExpanded={expandAll}
          headerText={
            <Box variant="h4" tagOverride="strong">
          Community: How can I get involved?
            </Box>
          }>
          <ul>
            <li>
              Our <Link href="/">community articles</Link> updates every two weeks with new articles
              and components about Cloudscape and other design systems.
            </li>
            <li>
              When we establish a version controlled repository, we will
              accept community contributions in the form of pull requests.
            </li>
          </ul>
        </ExpandableSection>
      </Container>
      <Container>
        <ExpandableSection
          defaultExpanded={expandAll}
          headerText={
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
      <Container>
        <ExpandableSection
          defaultExpanded={expandAll}
          headerText={
            <Box variant="h4" tagOverride="strong">
          What versions are used?
            </Box>
          }>
          <Box variant="p">
            The documentation was written using Cloudscape with these tools.
            <ul>
              <li>Cloudscape components v3</li>
              <li>Cloudscape collection hooks v1</li>
              <li>Cloudscape design tokens v3</li>
              <li>Cloudscape global styles v1</li>
              <li>React v18</li>
              <li>Typescript v5</li>
            </ul>
          </Box>
          {/* <Box variant="p">
      A few of the addons also require Redux Toolkit.
      </Box>
      <ul>
        <li>Redux v4</li>
        <li>Redux Toolkit v1</li>
      </ul> */}
        </ExpandableSection>
      </Container>
    </SpaceBetween>
  </ContentLayout>;
};
