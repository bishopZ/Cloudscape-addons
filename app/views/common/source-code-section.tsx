import { Container, ExpandableSection } from '@cloudscape-design/components';
import React from 'react';

import { SourceHeader } from './headers/source-header';

type Props = {
  source: string
}

export const SourceCodeSection = (props: Props) => {
  const { source } = props;

  return <Container header={<SourceHeader source={source} />}>
    <ExpandableSection
      headerText="View source code">
      <pre><code className="language-javascript">
        {source}
      </code></pre>
    </ExpandableSection>
  </Container>;
};
