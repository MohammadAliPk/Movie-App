import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";

const CustomPagination = ({ currentPage, totalPages, variableName }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const setCurrentPage = (page) => {
    setSearchParams({ ...searchParams, page });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Pagination
      boundaryCount={2}
      siblingCount={2}
      page={currentPage}
      count={totalPages}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={{
            pathname: `/${variableName}/${item.page}`,
            search: location.search,
          }}
          onClick={() => setCurrentPage(item.page)}
          {...item}
        />
      )}
    />
  );
};

export default CustomPagination;
