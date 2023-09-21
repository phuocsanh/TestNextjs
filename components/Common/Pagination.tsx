import Link from "next/link";

interface IPagination {
  currentPage: number;
  totalPages: number;
  pathName: string;
  queryObject: any;
}
export const START_PAGE = 1;
export const Pagination = ({
  currentPage,
  totalPages,
  pathName,
  queryObject,
}: IPagination) => {
  const PAGINATION_DOTS = "...";
  const TOTAL_DISPLAY_PAGES = 5;
  const firstPages = [1, 2, 3];
  const lastPages = [totalPages - 2, totalPages - 1, totalPages];
  const displayPageNumbers = [];
  if (totalPages <= TOTAL_DISPLAY_PAGES) {
    for (let i = 1; i <= totalPages; i++) {
      displayPageNumbers.push(i);
    }
  } else {
    if (firstPages.includes(currentPage)) {
      displayPageNumbers.push(...firstPages);
      displayPageNumbers.push(4);
      displayPageNumbers.push(PAGINATION_DOTS);
      displayPageNumbers.push(totalPages);
    } else if (lastPages.includes(currentPage)) {
      displayPageNumbers.push(1);
      displayPageNumbers.push(PAGINATION_DOTS);
      displayPageNumbers.push(totalPages - 3);
      displayPageNumbers.push(...lastPages);
    } else {
      displayPageNumbers.push(1);
      displayPageNumbers.push(PAGINATION_DOTS);
      displayPageNumbers.push(currentPage - 1);
      displayPageNumbers.push(currentPage);
      displayPageNumbers.push(currentPage + 1);
      displayPageNumbers.push(PAGINATION_DOTS);
      displayPageNumbers.push(totalPages);
    }
  }

  return (
    <ul className="flex items-center justify-center pt-8">
      {currentPage !== START_PAGE && (
        <li key="prev" className="mx-1">
          <Link
            href={{
              pathname: pathName,
              query: { ...queryObject, current_page: currentPage - 1 },
            }}
            prefetch={false}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
          >
            <span>Previous</span>
          </Link>
        </li>
      )}
      {displayPageNumbers.map((pageNumber, index) => {
        return pageNumber === PAGINATION_DOTS ? (
          <span
            key={index}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
          >
            ...
          </span>
        ) : pageNumber == currentPage ? (
          <li key={index} className="mx-1">
            <Link
              href={{
                pathname: pathName,
                query: { ...queryObject, current_page: pageNumber },
              }}
              prefetch={false}
              aria-current="page"
              className="text-bold flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary px-4 text-white  transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              {pageNumber}
            </Link>
          </li>
        ) : (
          <li key={index} className="mx-1">
            <Link
              href={{
                pathname: pathName,
                query: { ...queryObject, current_page: pageNumber },
              }}
              prefetch={false}
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
      {currentPage !== totalPages && (
        <li key="last" className="mx-1">
          <Link
            href={{
              pathname: pathName,
              query: { ...queryObject, current_page: currentPage + 1 },
            }}
            prefetch={false}
            className="flex  h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
          >
            <span>Next</span>
          </Link>
        </li>
      )}
    </ul>
  );
};
