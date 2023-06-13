import { Link } from '@cloudscape-design/components';
import React from 'react';

import { formatDate } from '/addons/helpers/string-utils';
import type { TableColumn } from '/addons/helpers/type-helpers';
import type { Article } from '/data/articles';

export const TABLE_COLUMNS: TableColumn<Article>[] = [
  {
    id: 'title',
    header: 'Title',
    cell: item => <Link href={`#/article/${item.slug}`}>
      {item.title}
    </Link>,
    sortingField: 'title',
    editable: false
  },
  {
    id: 'publicationDate',
    header: 'Date',
    cell: item => formatDate(item.publicationDate),
    sortingField: 'publicationDate'
  },
  {
    id: 'section',
    header: 'Section',
    cell: item => item.section,
    sortingField: 'section'
  },
  {
    id: 'format',
    header: 'Format',
    cell: item => item.format,
    sortingField: 'format'
  },
  {
    id: 'topic',
    header: 'Topic',
    cell: item => item.topic,
    sortingField: 'topic'
  },
  {
    id: 'discipline',
    header: 'Discipline',
    cell: item => item.discipline,
    sortingField: 'discipline'
  },
  {
    id: 'vendor',
    header: 'Vendor',
    cell: item => item.vendor,
    sortingField: 'vendor'
  },
];
