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

      dispatch({ type: 'movies/load-success', payload: {movies: data.docs} });
    } catch (error) {
      dispatch({ type: 'movies/load-failure', payload: error.message });
    }
  };
};
