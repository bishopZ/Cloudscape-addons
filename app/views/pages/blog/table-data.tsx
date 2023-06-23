import { Link } from '@cloudscape-design/components';
import React from 'react';

import { formatDate, inNotEmpty } from '/addons/helpers/string-utils';
import type { TableColumn } from '/addons/helpers/type-helpers';
import type { Article } from '/data/articles';

export const TABLE_COLUMNS: TableColumn<Article>[] = [
  {
    id: 'title',
    header: 'Title',
    cell: item => <Link href={`#/blog/${item.slug}`}>
      {item.title}
    </Link>,
    sortingField: 'title',
    editable: false
  },
  {
    id: 'publicationDate',
    header: 'Date',
    cell: item => formatDate(item.publicationDate),
    sortingComparator: (a, b) => {
      if (a.publicationDate < b.publicationDate) return 1;
      if (a.publicationDate > b.publicationDate) return -1;
      return 0;
    }
  },
  {
    id: 'section',
    header: 'Section',
    cell: item => inNotEmpty(item.section),
    sortingField: 'section'
  },
  {
    id: 'format',
    header: 'Type',
    cell: item => inNotEmpty(item.format),
    sortingField: 'format'
  },
  {
    id: 'topic',
    header: 'Topic',
    cell: item => inNotEmpty(item.topic),
    sortingField: 'topic'
  },
  {
    id: 'discipline',
    header: 'Discipline',
    cell: item => inNotEmpty(item.discipline),
    sortingField: 'discipline'
  },
  {
    id: 'vendor',
    header: 'Vendor',
    cell: item => inNotEmpty(item.vendor),
    sortingField: 'vendor'
  },
];
