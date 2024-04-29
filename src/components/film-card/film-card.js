import styles from "./film-card.module.scss";
import {Link} from "react-router-dom";

export default function FilmCard({item}) {
  const {id, poster, name, year, rating, shortDescription, genres} = item;
  const {previewUrl} = poster;

  return (
    <article className={styles.filmCard}>
      <Link className={styles.imageWrapper} to={`/movie/${id}`}>
        <img className={styles.filmCard__image} src={previewUrl} alt={"photo"}/>
      </Link>
      <div className={styles.filmCard__info}>
        <div className={styles.info__wrapper}>
          <Link className={styles.imageWrapper} to={`/movie/${id}`}>
            <h2 className={styles.filmCard__name}>{name}</h2>
          </Link>
          <div className={styles.details}>
            <span>год: {year}</span>
            <span>imdb: {rating.imdb}</span>
          </div>
          <p className={styles.filmCard__description}>{shortDescription}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.filmCard__genres}>
            {genres.map((item) => (
            <span key={item.name} className={styles.filmCard__genre}>{item.name}</span>
          ))}
          </div>
        </div>
      </div>
    </article>
  );
}

