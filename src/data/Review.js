let review = {};

const FIRST_SET = "first";
const SECOND_SET = "second";

const RESULT_ACCEPT = true;
const RESULT_REJECT = false;

const init = (title, researchers, description, goals) => {
  review = {
    title,
    researchers,
    description,
    goals,
    articles: [],
    first: [],
    second: [],
    result: []
  };
};

const showSystematicReview = () => {
  console.log(review);
};

const articles = () => {
  return review.articles;
};
const firsts = () => {
  return review.first;
};
const seconds = () => {
  review.second = review.first
    .filter(
      ({ analysis, review }) =>
        analysis.result === RESULT_ACCEPT &&
        review.researchers === RESULT_ACCEPT
    )
    .map(({ id }) => ({ id }));

  return review.second;
};
const results = () => {
  review.result = review.second
    .filter(
      ({ analysis, review }) =>
        analysis.result === RESULT_ACCEPT &&
        review.researchers === RESULT_ACCEPT
    )
    .map(({ id }) => ({ id }));

  return review.result;
};

const getSystematicReview = () => {
  return JSON.stringify(review);
};

const openSystematicReview = data => {
  review = JSON.parse(data);
};

const getTitle = () => {
  return review.title;
};

const article = id => review.articles.filter(a => a.id === id)[0];

const addArticle = (
  id,
  name,
  authors,
  year,
  base,
  abstract,
  booktitle,
  doi,
  bibtex
) => {
  review.articles = [
    ...review.articles,
    { id, name, authors, year, base, abstract, booktitle, doi, bibtex }
  ];

  const contains = review.first.filter(identifier => {
    const item = article(identifier);
    if (name === item.name) return true;
    else return false;
  })[0];

  if (!contains) review.first = [...review.first, { id }];
};

const setAnalysis = (id, set, result, criterion) => {
  review[set] = review[set].map(a => {
    if (a.id === id) {
      return {
        id: a.id,
        analysis: {
          result,
          criterion
        }
      };
    } else return a;
  });
};

const setReview = (id, set, result, criterion) => {
  review[set] = review[set].map(a => {
    if (a.id === id) {
      return {
        id: a.id,
        analysis: a.analysis,
        review: {
          result,
          criterion
        }
      };
    } else return a;
  });
};

export {
  FIRST_SET,
  SECOND_SET,
  RESULT_ACCEPT,
  RESULT_REJECT,
  init,
  addArticle,
  article,
  showSystematicReview,
  setAnalysis,
  setReview,
  getSystematicReview,
  getTitle,
  openSystematicReview,
  articles,
  firsts,
  seconds,
  results
};
