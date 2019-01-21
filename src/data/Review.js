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
    addCriterion: [],
    deleteCriterion: [],
    articles: [],
    first: [],
    second: [],
    result: []
  };
};

const listAddCriterion = () => {
  return review.addCriterion ? review.addCriterion : [];
};

const listDeleteCriterion = () => {
  return review.deleteCriterion ? review.deleteCriterion : [];
};

const addCriterion = criteria => {
  review.addCriterion = [
    ...(review.addCriterion ? review.addCriterion : []),
    {
      id: `CA${review.addCriterion ? review.addCriterion.length : 0}`,
      criterion: criteria
    }
  ];

  showSystematicReview();
};

const deleteCriterion = criteria => {
  review.deleteCriterion = [
    ...(review.deleteCriterion ? review.deleteCriterion : []),
    {
      id: `CR${review.deleteCriterion ? review.deleteCriterion.length : 0}`,
      criterion: criteria
    }
  ];

  showSystematicReview();
};

const showSystematicReview = () => {
  console.log(review);
};

const articles = () => {
  return review.articles;
};

const firsts = () => {
  let titles = [];
  let oldFirst = [];
  if (review.first !== null && review.first.length > 0) oldFirst = review.first;

  review.first = [];
  let baseSet = {};

  for (const article of review.articles) {
    baseSet[article.name] = [
      ...(baseSet[article.name] ? baseSet[article.name] : []),
      article.base
    ];
    if (titles.includes(article.name)) {
      review.articles.map(a => a.name === article.name);
    } else {
      titles = [...titles, article.name];

      const result = oldFirst.filter(a => a.id === article.id)[0];

      if (result.analysis && result.review)
        review.first = [
          ...review.first,
          { id: article.id, analysis: result.analysis, review: result.review }
        ];
      else if (result.analysis && !result.review)
        review.first = [
          ...review.first,
          { id: article.id, analysis: result.analysis }
        ];
      else review.first = [...review.first, { id: article.id }];
    }
  }

  return review.first;
};
const seconds = () => {
  if (!review.first) return [];
  review.second = review.first
    .filter(
      ({ analysis, review }) =>
        analysis &&
        review &&
        analysis.result === RESULT_ACCEPT &&
        review.researchers === RESULT_ACCEPT
    )
    .map(({ id }) => ({ id }));

  return review.second;
};
const results = () => {
  if (!review.second) return [];
  review.result = review.second
    .filter(
      ({ analysis, review }) =>
        analysis &&
        review &&
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
  name,
  authors,
  year,
  base,
  abstract,
  booktitle,
  doi,
  bibtex
) => {
  const id = `${base}${review.articles.length}`;
  review.articles = [
    ...review.articles,
    { id, name, authors, year, base: [base], abstract, booktitle, doi, bibtex }
  ];
};

const getData = (id, set) => {
  return review[set].filter(a => a.id === id)[0];
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
  results,
  addCriterion,
  deleteCriterion,
  listAddCriterion,
  listDeleteCriterion,
  getData
};
