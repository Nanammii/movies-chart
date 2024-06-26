import React, {useEffect} from 'react';
import styles from "./film-page.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {fetchFilm} from "../../store/actions";
import Spinner from "../../components/spinner/spinner";
import classNames from "classnames";

function FilmPage(props) {
  const {filmId} = useParams();
  const dispatch = useDispatch();
  const currentFilm = useSelector(state => state.film.film);
  const isLoading = useSelector(state => state.film.isLoading);

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilm(filmId));
    }
  }, [filmId, dispatch]);
  console.log(filmId, isLoading, currentFilm)


  if (isLoading) {
    return (
      <Spinner />
    );
  }

  const {poster, name, description, rating, year, genres, countries, alternativeName, similarMovies} = currentFilm;

  return (
    <div className={classNames('page', 'container')}>
      <Header />

      <div className={styles.wrapper}>
        <img className={styles.poster} src={poster?.url} alt={alternativeName}/>
        <div className={styles.info__wrapper}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.details}>
            <span>imdb: {rating?.imdb}</span>
            <span>Год: {year}</span>
            <span className={styles.listDetail}>
              Жанры:
              {genres && genres.map(item => (
                <span key={item.name}>{item.name}</span>
              ))}
            </span>
            <span className={styles.listDetail}>
              Страна:
              {countries && countries.map(item => (
                <span key={item.name}>{item.name}</span>
              ))}
            </span>
          </p>
          <p className={styles.description}>{description}</p>
        </div>
        <section className={styles.similar}>
          <h2>Похожие фильмы</h2>
          <div className={styles.similar__list}>
          {similarMovies && similarMovies.map(item => (
            <div className={styles.similar__item} key={item.id}>
              <img className={styles.similar__image} src={item.poster?.previewUrl} />
              <span>{item.name}</span>
            </div>
          ))}
          </div>
        </section>


      </div>
      <Footer />

    </div>
  );
}

export default FilmPage;
