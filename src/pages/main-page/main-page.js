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
  const select = useSelector(state => ({
    movies: state.movies.movies,
    isLoadingData: state.movies.isLoading,
    totalCount: state.movies.totalCount,
    page: state.movies.page,
    limit: state.movies.limit
  }))

  console.log(select.movies)

  const handlePaginate = (page) => {
    dispatch(setParams({page}));
  }

  const makePaginatorLink = (page) => {
    return `?${new URLSearchParams({
      page,
      limit: select.limit,
    })}`;
  };

  if (select.isLoadingData) {
    return (
      <Spinner />
    )
  }

  return (
    <div className={classNames(styles.page, 'container')}>
      <Header/>

      {select.movies && select.movies.length &&
        <main className={styles.page__index}>
          <div className={styles.content__container}>
            <Category items={select.movies}/>
            <Pagination count={select.totalCount} page={select.page} limit={select.limit} onChange={handlePaginate}
            makeLink={makePaginatorLink}/>
          </div>

        </main>
      }

      <Footer />

    </div>
  );
}

export default MainPage;
