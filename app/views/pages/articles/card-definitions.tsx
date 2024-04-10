import type { CardsProps } from '@cloudscape-design/components';
import { Box, Link } from '@cloudscape-design/components';
import React from 'react';

import { Dash } from '/addons/details/loading';
import { getRelativeTime } from '/addons/helpers/string-utils';
import type { Article } from '/data/articles';

export const CARD_DEFINITIONS: CardsProps.CardDefinition<Article> = {
  header: item =>
    <Link fontSize="heading-m" href={`#/articles/${item.slug}`}>
      {item.title}
    </Link>,
  sections: [
    {
      id: 'image',
      content: item => <Link href={`#/articles/${item.slug}`}>
        <div className="card-image">
          <img
            src={item.image === ''
              ? 'assets/chasm.jpg'
              : item.image}
            alt={item.title}
          />
        </div>
      </Link>
    },
    { id: 'description',
      header: '',
      content: item => <Box fontSize="body-m">
        {item.description}
      </Box>,
    }, {
      id: 'publicationDate',
      header: 'Published',
      content: item => <Box fontSize="body-s" color="text-body-secondary">
        {getRelativeTime(item.publicationDate)}
      </Box>,
      width: 33
    }, {
      id: 'discipline',
      header: 'Discipline',
      content: item => <Box fontSize="body-s" color="text-body-secondary">
        {item.discipline ?? <Dash />}
      </Box>,
      width: 33
    }, {
      id: 'format',
      header: 'Format',
      content: item => <Box fontSize="body-s" color="text-body-secondary">
        {item.format ?? <Dash />}
      </Box>,
      width: 33
    }],
};
