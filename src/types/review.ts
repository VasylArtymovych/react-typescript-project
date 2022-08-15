interface IResults {
  id: string;
  author: string;
  content: string;
}

export interface IReview {
  results: Array<IResults>;
}
