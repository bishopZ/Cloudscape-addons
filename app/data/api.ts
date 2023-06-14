
export const fetchArticles = async () => {
  try {
    const articles = await fetch('http://localhost:3000/api/articles')
      .then(response => response.json());
    return articles;
  } catch (error) {
    console.log(error);
    return fakeData;
  }
};

const fakeData = [
  {
    slug: 'icon-map',
    title: 'Icon map',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
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
];
