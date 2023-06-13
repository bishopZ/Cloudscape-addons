import { Button, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { makeCounter } from '/addons/helpers/string-utils';
import { getSelectedCount } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const BlogHeader = () => {
  const { selected, total } = useAppSelector(getSelectedCount);

  return <Header
    variant="h1"
    counter={makeCounter(selected, total)}
    actions={<HeaderActions />}
    // TODO info={<InfoLink id={'some.info.id'} />}
  >
    Articles
  </Header>;
};


const HeaderActions = () => {
  // const { selected, selectedItems } = useAppSelector(getSelectedCount);
  // const dispatch = useAppDispatch();

  return <SpaceBetween size="s" direction="horizontal">
    <Link href="#/">
      <Button variant="primary">
        Browse
      </Button>
    </Link>
  </SpaceBetween>;
};
