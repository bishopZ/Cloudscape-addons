
module.exports = () => [
  {
    slug: 'icon-map',
    title: 'Icon map',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 15 2021'),
    tenets: [0]
  },
  {
    slug: 'loading-states',
    title: 'Loading states',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Details',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 16 2021'),
    tenets: [2, 3]
  },
  {
    slug: 'labeled-input',
    title: 'Labeled input',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Forms',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 17 2021'),
    tenets: [1, 3, 4]
  },
  // {
  //   slug: 'labeled-number',
  //   title: 'Labeled number',
  //   format: 'Documentation',
  //   topic: 'Components',
  //   discipline: 'Engineering',
  // },
] .filter(item => {
  if (!item.publicationDate) return true;
  const today = new Date();
  if (today > item.publicationDate) return true;
  return false;
});