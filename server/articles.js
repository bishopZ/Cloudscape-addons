
module.exports = () => [
  {
    slug: 'loading-states',
    title: 'Loading spinner and dash',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Details',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 1, 2021'),
    tenets: [2, 3],
    referenceComponent: 'Spinner',
    referenceLink: 'https://cloudscape.design/components/spinner/'
  },
  {
    slug: 'icon-map',
    title: 'Icon map',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 3, 2021'),
    tenets: [0],
    referenceComponent: 'Icon',
    referenceLink: 'https://cloudscape.design/components/icon/'
  },
  {
    slug: 'labeled-input',
    title: 'Labeled input',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Forms',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 14, 2021'),
    tenets: [0, 1, 3, 4, 5],
    referenceComponent: 'Input',
    referenceLink: 'https://cloudscape.design/components/input/'
  },
  {
    slug: 'labeled-number',
    title: 'Labeled number',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Details',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 12, 2021'),
    tenets: [0, 1, 3],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html'
  },
  {
    slug: 'spacing-constants',
    title: 'Spacing constants',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 2, 2021'),
    tenets: [0, 1, 2, 3],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html'
  },
  {
    slug: 'generic-empty',
    title: 'Generic empty',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Tables',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 4, 2021'),
    tenets: [2, 4],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html'
  },
  {
    slug: 'bridging-the-chasm',
    title: 'Bridging the chasm: Unifying design and development',
    format: 'Article',
    topic: 'Collaboration',
    discipline: 'Project management',
    section: 'Tools',
    vendor: 'Figma',
    publicationDate: new Date('Jun 1, 2021'),
  },
  // {
  //   slug: 'labeled-value',
  //   title: 'Labeled value',
  //   format: 'Documentation',
  //   topic: 'Components',
  //   discipline: 'Engineering',
  //   section: 'Details',
  //   vendor: 'Cloudscape',
  //   publicationDate: new Date('Jun 5, 2021'),
  //   tenets: [1, 2, 3],
  //   referenceComponent: 'Dashboard',
  //   referenceLink: 'https://cloudscape.design/examples/react/dashboard.html'
  // },
] .filter(item => {
  if (!item.publicationDate) return false;
  const today = new Date();
  if (today > item.publicationDate) return true;
  return false;
});