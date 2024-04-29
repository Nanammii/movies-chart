import {memo} from 'react';
import classNames from "classnames";
import styles from "./pagination.module.scss";

function Pagination({count, page, limit, onChange, makeLink}) {
  const length = Math.ceil(count / Math.max(limit, 1));
  console.log(length)


  let left = Math.max(page - 1, 1);
  let right = Math.min(left + 1 * 2, length);
  // Корректировка когда страница в конце
  left = Math.max(right - 1 * 2, 1);

  // Массив номеров, чтобы удобней рендерить
  let items = [];
  if (left > 1) items.push(1);
  if (left > 2) items.push(null);
  for (let page = left; page <= right; page++) items.push(page);
  if (right < length - 1) items.push(null);
  if (right < length) items.push(length);

  const onClickHandler = (number) => (e) => {
    if (onChange && number) {
      e.preventDefault();
      onChange(number);
    }
  }

  return (
    <ul className={styles.pagination}>
      {items.map((number, index) => (
        <li key={index}
            className={classNames(styles.pagination__item,
              {[styles.pagination__item_active]: number === page, [styles.pagination__item_split]: !number})}
            onClick={onClickHandler(number)}>
          {number
            ? (makeLink
                ? <a href={makeLink(number)}>{number}</a>
                : number
            )
            : '...'
          }
        </li>
      ))}
    </ul>
  )
}

export default memo(Pagination);
