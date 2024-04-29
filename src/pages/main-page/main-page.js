import React from 'react';
import Header from "../../components/header/header";
import styles from "./main-page.module.scss";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import Category from "../../components/category/category";

function MainPage(props) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies)
  console.log(movies)
  return (
    <div className={styles.page}>
      <Header />

      {movies && movies.length &&
        <main className={styles.page__index}>
          <div className={classNames("content", "container")}>
            <div className={styles.content__container}>
              <Category items={movies}/>
            </div>

          </div>
        </main>
      }

    </div>
  );
}

export default MainPage;
