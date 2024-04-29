import React, {useEffect} from 'react';
import styles from "./film-page.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {fetchFilm} from "../../store/actions";
import Spinner from "../../components/spinner/spinner";

function FilmPage(props) {
  const {filmId} = useParams();
  const dispatch = useDispatch();
  const currentFilm = useSelector(state => state.film.film);
  const isLoading = useSelector(state => state.film.isLoading);

  console.log(currentFilm)

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilm(filmId));
    }
  }, [filmId, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />
      <Footer />

    </div>
  );
}

export default FilmPage;
