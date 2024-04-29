import React from 'react';
import Header from "../../components/header/header";
import styles from "./main-page.module.scss";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import Category from "../../components/category/category";
import Footer from "../../components/footer/footer";
import Spinner from "../../components/spinner/spinner";
import Pagination from "../../components/pagination/pagination";
import {setParams} from "../../store/actions";

function MainPage(props) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const isLoadingData = useSelector(state => state.movies.isLoading);
  const totalCount = useSelector(state => state.movies.totalCount);
  const page = useSelector(state => state.movies.page);
  const limit = useSelector(state => state.movies.limit);

  console.log(movies)

  const handlePaginate = (page) => {
    dispatch(setParams({page}));
  }

  const makePaginatorLink = (page) => {
    return `?${new URLSearchParams({
      page,
      limit: limit,
    })}`;
  };

  if (isLoadingData) {
    return (
      <Spinner />
    )
  }

  return (
    <div className={classNames('page', 'container')}>
      <Header/>

      {movies && movies.length &&
        <main className={styles.page__index}>
          <div className={styles.content__container}>
            <Category items={movies}/>
            <Pagination count={totalCount} page={page} limit={limit} onChange={handlePaginate}
            makeLink={makePaginatorLink}/>
          </div>

        </main>
      }

      <Footer />

    </div>
  );
}

export default MainPage;
