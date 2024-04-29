const initialState = {
  isLoading: false,
  page: 1,
  error: null,
};

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'catalog/load-pending':
      return {...state, isLoading: true, error: null};
    case 'catalog/load-success':
      return {...state, isLoading: false, page: action.payload.page};
    case 'catalog/load-failure':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
