import { Box } from '@cloudscape-design/components';
import * as awsui from '@cloudscape-design/design-tokens';
import React from 'react';

import { Spacing } from './helpers/spacing-constants';

type Props = {
  value: string
  height?: number
}

const DEFAULT_HEIGHT = 360;

const formatCode = (code: string) => {
  const lines = code.split('\r\n');
  const lineCount = lines.length;
  let padding = <>&nbsp;</>;
  if (lineCount > 9) padding = <>&nbsp;&nbsp;</>;
  if (lineCount > 99) padding = <>&nbsp;&nbsp;&nbsp;</>;
  if (lineCount > 999) padding = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  if (lineCount > 9999) padding = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
  return <>
    <br />
    <>&nbsp;1{padding}</>
    {lines.map((line, index) => <Box key={index}>
      {line.split(' ').map(
        (linePart, lineNumber) => <Box key={lineNumber}>{linePart}&nbsp;</Box>
      )}
      <br />
      <>&nbsp;</>
      {index !== lineCount - 1
        && <>
          {index + 2}
          {padding}
        </>}
    </Box>)}
  </>;
};

const styleBase = {
  backgroundColor: awsui.colorBackgroundCellShaded,
};

export const CodeDisplay = (props: Props) => {
  const {
    height,
    value,
  } = props;

  return <div
    className="code-background"
    style={height
      ? {
        height,
        overflowY: 'scroll',
        ...styleBase
      }
      : {
        minHeight: DEFAULT_HEIGHT,
        ...styleBase
      }}>
    <Box
      variant="code"
      padding={Spacing.HorizontalS}
      color="text-body-secondary"
      display="block"
      fontSize="body-s">
      {formatCode(value)}
    </Box>
  </div>;
};
