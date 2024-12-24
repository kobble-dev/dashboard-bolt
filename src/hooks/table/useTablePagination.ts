import { useState, useMemo, useCallback } from 'react';

export function useTablePagination<T>(items: T[], defaultPageSize: number = 10) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const paginatedItems = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }, [items, page, pageSize]);

  const handlePageSizeChange = useCallback((newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1); // Reset to first page when changing page size
  }, []);

  return {
    paginatedItems,
    totalPages: Math.ceil(items.length / pageSize),
    currentPage: page,
    itemsPerPage: pageSize,
    setPage,
    setItemsPerPage: handlePageSizeChange,
  };
}