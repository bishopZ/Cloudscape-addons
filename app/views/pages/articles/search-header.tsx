import { Button, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { Link } from 'react-router-dom';

import { makeCounter } from '/addons/helpers/string-utils';
import { getSelectedCount } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const BlogHeader = () => {
  const { selected, total } = useAppSelector(getSelectedCount);

  return <Header
    variant="h1"
    counter={makeCounter(selected, total)}
    actions={<HeaderActions />}>
    Search articles
  </Header>;
};


const HeaderActions = () => {
  // const { selected, selectedItems } = useAppSelector(getSelectedCount);
  // const dispatch = useAppDispatch();

  return <SpaceBetween size="s" direction="horizontal">
    <Link to="/">
      <Button variant="primary">
        Browse
      </Button>
    </Link>
  </SpaceBetween>;
};
