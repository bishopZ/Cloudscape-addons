
module.exports = () => [
  {
    slug: 'icon-map',
    title: 'Icon map',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    publicationDate: new Date('Jun 15 2023')
  },
  {
    slug: 'loading',
    title: 'Loading',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
  {
    slug: 'type-helpers',
    title: 'Type helpers',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
  {
    slug: 'string-utils',
    title: 'String utils',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
  {
    slug: 'i18n-helpers',
    title: 'i18n helpers',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
  {
    slug: 'a11y-helpers',
    title: 'a11y helpers',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
  {
    slug: 'labeled-input',
    title: 'Labeled input',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
  {
    slug: 'labeled-number',
    title: 'Labeled number',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
  },
] .filter(item => {
  if (!item.publicationDate) return true;
  const today = new Date();
  if (today > item.publicationDate) return true;
  return false;
});