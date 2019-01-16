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
};

const accept = (criterion, set, id) => {
  review[set] = [
    ...review[set],
    { id, analysis: { result: RESULT_ACCEPT, criterion } }
  ];
};

const reject = (criterion, set, id) => {
  review[set] = [
    ...review[set],
    { id, analysis: { result: RESULT_REJECT, criterion } }
  ];
};

const setAnalysis = (id, set, result, criterion) => {
  if (result) accept(criterion, set, id);
  else reject(criterion, set, id);
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

const result = () => (review.result = review.second.accept.map(({ id }) => id));

export {
  FIRST_SET,
  SECOND_SET,
  RESULT_ACCEPT,
  RESULT_REJECT,
  init,
  addArticle,
  article,
  result,
  showSystematicReview,
  setAnalysis,
  setReview,
  getSystematicReview,
  getTitle,
  openSystematicReview
};
