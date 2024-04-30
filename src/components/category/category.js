import styles from "./category.module.scss";
import FilmCard from "../film-card/film-card";

export default function Category({items}) {

  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Фильмы</h2>

        <div className={styles.films__list}>
          {items.map((item) => (
            <FilmCard item={item} key={item.id} />
          ))}
        </div>

    </div>
  );
}
