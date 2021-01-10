import React, { useState } from "react";
import "./Pagination.scss";

import Button from "../Button/Button";
import classNames from "classnames";

export const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  pagesPortion = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  let portionsNumber = Math.ceil(pagesCount / pagesPortion);

  const [portionIndexNumber, setPortionIndexNumber] = useState(1);

  let leftPortionNumber = (portionIndexNumber - 1) * pagesPortion + 1;
  let rightPortionNumber = portionIndexNumber * pagesPortion;

  return (
    <div className="pagination">
      <Button
        disabled={portionIndexNumber <= 1}
        onClick={(e) => {
          portionIndexNumber > 1 &&
            setPortionIndexNumber(portionIndexNumber - 1);
          onPageChanged(leftPortionNumber - pagesPortion);
        }}
      >
        PREV
      </Button>

      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              key={p}
              className={classNames(
                { "pagination__page-number_selected": currentPage === p },
                "pagination__page-number"
              )}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}

      <Button
        disabled={portionIndexNumber >= portionsNumber}
        onClick={(e) => {
          if (portionIndexNumber < portionsNumber) {
            setPortionIndexNumber(portionIndexNumber + 1);
            onPageChanged(rightPortionNumber + 1);
          }
        }}
      >
        NEXT
      </Button>
    </div>
  );
};
