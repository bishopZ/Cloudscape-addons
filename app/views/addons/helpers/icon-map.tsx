import { Box, Grid, Icon } from '@cloudscape-design/components';
import React from 'react';

const icons = [
  'add-plus', 'angle-left-double', 'angle-left', 'angle-right-double', 'angle-right', 'angle-up', 'angle-down',
  'arrow-left', 'audio-full', 'audio-half', 'audio-off', 'bug', 'call', 'calendar', 'caret-down-filled', 'caret-down',
  'caret-left-filled', 'caret-right-filled', 'caret-up-filled', 'caret-up', 'check', 'contact', 'close', 'copy',
  'delete-marker', 'download', 'drag-indicator', 'edit', 'ellipsis', 'envelope', 'expand', 'external', 'file-open',
  'file', 'filter', 'flag', 'folder-open', 'folder', 'group-active', 'group', 'heart', 'insert-row', 'key', 'keyboard',
  'lock-private', 'menu', 'microphone', 'microphone-off', 'multiscreen', 'notification', 'redo', 'refresh', 'remove',
  'resize-area', 'script', 'search', 'security', 'settings', 'share', 'shrink', 'status-in-progress', 'status-info',
  'status-negative', 'status-pending', 'status-positive', 'status-stopped', 'status-warning', 'suggestions',
  'thumbs-down-filled', 'thumbs-down', 'thumbs-up-filled', 'thumbs-up', 'ticket', 'treeview-collapse',
  'treeview-expand', 'undo', 'unlocked', 'upload-download', 'upload', 'user-profile-active', 'user-profile',
  'video-off', 'video-on', 'video-unavailable', 'view-full', 'view-horizontal', 'view-vertical', 'zoom-in',
  'zoom-out', 'zoom-to-fit'
] as const;

const grid = icons.map(() => ({ colspan: 2 }));

export const IconMap = () => {
  return <Grid gridDefinition={grid}>
    {icons.map(icon =>
      <Box key={icon}>
        <Icon name={icon} size="small" />
        <>&nbsp;&nbsp;</>
        {icon}
      </Box>
    )}
  </Grid>;
};
