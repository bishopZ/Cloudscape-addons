import { Box, Container, Header, Icon, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { IconMap } from '/addons/helpers/icon-map';

export const IconMapArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
        Introducing the IconMap
      </Header>}>
      <Box variant="p">
        Cloudscape includes
        <ExternalLink href="https://cloudscape.design/components/icon/?tabId=api">a nice set of icons</ExternalLink>,
        however the documentation doesn't
        show a preview of those icons. All the names are listed, but finding the
        icon that matches your design, can take time.
      </Box>
      <Box variant="p">
        Icon map is a simple component that displays the available icons. When you're
        trying to visually match an icon, you can insert the Icon map component and preview the result
        to quickly locate the icon you are looking for.
      </Box>
      <Box variant="p">
        Icon map isn't meant to be included in production code, but rather as
        a developer tool to speed the process of identifing a particular icon's name.
      </Box>
    </Container>
    <Container header={
      <Header variant="h2">
        <>Source code</>
        <>&nbsp;</>
        <Icon name="script" size="big" />
      </Header>
    }>
      <pre><code className="language-javascript">
        {`import { Box, Grid, Icon, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from './spacing-constants';

const names = [
  'add-plus', 'angle-left-double', 'angle-left', 'angle-right-double',
  'angle-right', 'angle-up', 'angle-down', 'arrow-left', 'audio-full',
  'audio-half', 'audio-off', 'bug', 'call', 'calendar', 'caret-down-filled',
  'caret-down', 'caret-left-filled', 'caret-right-filled', 'caret-up-filled',
  'caret-up', 'check', 'contact', 'close', 'copy', 'delete-marker', 'download',
  'drag-indicator', 'edit', 'ellipsis', 'envelope', 'expand', 'external',
  'file-open', 'file', 'filter', 'flag', 'folder-open', 'folder', 'group-active',
  'group', 'heart', 'insert-row', 'key', 'keyboard', 'lock-private', 'menu',
  'microphone', 'microphone-off', 'multiscreen', 'notification', 'redo',
  'refresh', 'remove', 'resize-area', 'script', 'search', 'security',
  'settings', 'share', 'shrink', 'status-in-progress', 'status-info',
  'status-negative', 'status-pending', 'status-positive', 'status-stopped',
  'status-warning', 'suggestions', 'thumbs-down-filled', 'thumbs-down',
  'thumbs-up-filled', 'thumbs-up', 'ticket', 'treeview-collapse',
  'treeview-expand', 'undo', 'unlocked', 'upload-download', 'upload',
  'user-profile-active', 'user-profile', 'video-off', 'video-on',
  'video-unavailable', 'view-full', 'view-horizontal', 'view-vertical',
  'zoom-in', 'zoom-out', 'zoom-to-fit'
] as const;

const grid = names.map(() => ({ colspan: 3 }));

export const IconMap = () => {
  return <Box margin={Spacing.S}>
    <Grid gridDefinition={grid}>
      {names.map((name, index) =>
        <SpaceBetween key={index} size="s" direction="horizontal">
          <Icon name={name} size="small" />
          <>{name}</>
        </SpaceBetween>
      )}
    </Grid>
  </Box>;
};`}</code></pre>
    </Container>
    <Container header={
      <Header variant="h2">
        Preview
        <>&nbsp;</>
        <Icon name="multiscreen" size="medium" />
      </Header>
    }>
      <IconMap />
    </Container>
  </SpaceBetween>;
};
