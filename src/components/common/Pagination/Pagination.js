import React, { useState } from "react";
import style from "./Pagination.module.css";
import classNames from "classnames/bind";

let cn = classNames.bind(style);

export const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  pagesPortion = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsNumber = Math.ceil(pagesCount / pagesPortion);

  const [portionIndexNumber, setPortionIndexNumber] = useState(1);

  let leftPortionNumber = (portionIndexNumber - 1) * pagesPortion + 1;
  let rightPortionNumber = portionIndexNumber * pagesPortion;

  return (
    <div className={style.pagination}>
      {portionIndexNumber > 1 && (
        <button
          onClick={(e) => {
            portionIndexNumber > 1 &&
              setPortionIndexNumber(portionIndexNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              key={p}
              // className={
              //   currentPage === p
              //     ? style.pageCountSelector
              //     : style.pagginationStyle
              // }
              className={cn(
                { [style.pageCountSelector]: currentPage === p },
                style.pagginationStyle
              )}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionIndexNumber < portionsNumber && (
        <button
          onClick={(e) => {
            if (portionIndexNumber < portionsNumber) {
              setPortionIndexNumber(portionIndexNumber + 1);
            }
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
