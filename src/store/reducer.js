const initialState = {
  isLoading: false,
  movies: {},
  totalCount: 0,
  page: 1,
  limit: 10,
  error: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'movies/load-pending':
      return {...state, isLoading: true, movies: {}, error: null};
    case 'movies/load-success':
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
        totalCount: action.payload.totalCount,
        page: action.payload.page,
        limit: action.payload.limit
      };
    case 'movies/load-failure':
      return {...state, isLoading: false, movies: {}, error: action.payload};
    default:
      return state;
  }
};
