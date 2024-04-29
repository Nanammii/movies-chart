const initialState = {
    isLoading: false,
    movies: {},
    error: null,
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'movies/load-pending':
            return { ...state, isLoading: true, movies: {}, error: null };
        case 'movies/load-success':
            return { ...state, isLoading: false, movies: action.payload.movies };
        case 'movies/load-failure':
            return { ...state, isLoading: false, movies: {}, error: action.payload };
        default:
            return state;
    }
};