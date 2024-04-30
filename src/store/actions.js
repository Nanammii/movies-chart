import {BACKEND_URL} from "../const";

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: 'movies/load-pending' });

    try {
      const response = await fetch(`${BACKEND_URL}/movie`, {
        method: 'GET',
        headers: {'X-API-KEY': 'Z6AXAX7-DSM400W-JZBYEGH-429BPFJ'}
      });
      const data = await response.json();
      console.log(data)

      dispatch({
        type: 'movies/load-success',
        payload: {movies: data.docs, totalCount: data.total, page: data.page, limit: data.limit}
      });
    } catch (error) {
      dispatch({ type: 'movies/load-failure', payload: error.message });
    }
  };
};

export const fetchFilm = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'film/load-pending' });

    try {
      const response = await fetch(`${BACKEND_URL}/movie/${id}`, {
        method: 'GET',
        headers: {'X-API-KEY': 'Z6AXAX7-DSM400W-JZBYEGH-429BPFJ'}
      });

      const data = await response.json();

      dispatch({
        type: 'film/load-success',
        payload: {film: data}
      });
    } catch (error) {
      dispatch({ type: 'film/load-failure', payload: error.message });
    }
  };
};

export const setParams = (newParams) => {
  return ({type: 'set-params', payload: newParams})
}
