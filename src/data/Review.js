let review = {};
let baseData = {
  isArticlesUpdate: true,
  isFirstUpdate: true,
  isSecondUpdate: true,
  isResultUpdate: true
};

const ARTICLES_SET = "articles";
const FIRST_SET = "first";
const SECOND_SET = "second";
const RESULT_SET = "result";

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

const updateArticle = (id, data) => {
  review.articles = review.articles.map(a =>
    a.id === id ? { ...a, ...data } : a
  );
};

const isUpdate = set => {
  if (set === FIRST_SET) {
    return baseData.isFirstUpdate;
  } else if (set === SECOND_SET) {
    return baseData.isSecondUpdate;
  } else return baseData.isResultUpdate;
};

const setUpdate = (set, value) => {
  if (set === FIRST_SET) {
    baseData.isFirstUpdate = value;
  } else if (set === SECOND_SET) {
    baseData.isSecondUpdate = value;
  } else baseData.isResultUpdate = value;
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
  //console.log(review);
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
    const articleName = article.name.toLowerCase();

    if (!baseSet[articleName]) baseSet[articleName] = [...article.base];
    else {
      article.base.forEach(a => {
        if (!baseSet[articleName].includes(a)) baseSet[articleName].push(a);
      });
    }

    if (!titles.includes(articleName)) {
      titles = [...titles, articleName];

      const result = oldFirst.filter(a => a.id === article.id)[0];

      if (result) {
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
      } else review.first = [...review.first, { id: article.id }];
    }
  }

  review.articles = review.articles.map(a => {
    return {
      ...a,
      base: baseSet[a.name.toLowerCase()]
    };
  });

  return review.first;
};
const seconds = () => {
  if (!review.first) return [];

  let oldSecond = [];
  if (review.second.length > 0) oldSecond = review.second;

  review.second = review.first
    .filter(
      ({ analysis, review }) =>
        analysis &&
        review &&
        analysis.result === RESULT_ACCEPT &&
        review.result === RESULT_ACCEPT
    )
    .map(({ id }) => {
      const result = oldSecond.filter(a => a.id === id)[0];

      if (result) {
        if (result.analysis && result.review) {
          return { id, analysis: result.analysis, review: result.review };
        } else if (result.analysis && !result.review) {
          return { id, analysis: result.analysis };
        } else return { id };
      } else return { id };
    });

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
        review.result === RESULT_ACCEPT
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
  if (set === FIRST_SET) setUpdate(SECOND_SET, false);
  else setUpdate(RESULT_SET, false);

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
  if (set === FIRST_SET) setUpdate(SECOND_SET, false);
  else setUpdate(RESULT_SET, false);

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
  RESULT_SET,
  ARTICLES_SET,
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
  getData,
  isUpdate,
  setUpdate,
  updateArticle
};
