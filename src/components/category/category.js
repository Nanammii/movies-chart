import styles from "./category.module.scss";

export default function Category({items}) {

  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>TV</h2>
      <div className={styles.category__films}>
        <div className={styles.films__list}>
          {/*{items.map((item) => (*/}
          {/*  <FilmCard item={item} key={item.mal_id} />*/}
          {/*))}*/}
        </div>
      </div>
    </div>
  );
}
