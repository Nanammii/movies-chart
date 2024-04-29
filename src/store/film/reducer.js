const initialState = {
  isLoading: false,
  film: {},
  error: null,
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'film/load-pending':
      return {...state, isLoading: true, film: {}, error: null};
    case 'film/load-success':
      return {
        ...state,
        isLoading: false,
        film: action.payload.film,
      };
    case 'movies/load-failure':
      return {...state, isLoading: false, film: {}, error: action.payload};
    default:
      return state;
  }
};
