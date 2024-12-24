import { useState, useEffect } from 'react';
import type { Transaction } from '../types/transaction';
import type { PaginationMeta } from '../types/api';
import { getTransactions } from '../api/transactionApi';

export function useTransactionList(cardId: string, initialPageSize: number = 10) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [meta, setMeta] = useState<PaginationMeta>({
    currentPage: 1,
    pageSize: initialPageSize,
    totalItems: 0,
    totalPages: 0,
  });

  const loadTransactions = async (page: number, pageSize: number) => {
    try {
      setIsLoading(true);
      const response = await getTransactions(cardId, { page, pageSize });
      setTransactions(response.data);
      setMeta(response.meta);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load transactions'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTransactions(meta.currentPage, meta.pageSize);
  }, [cardId]);

  const handlePageChange = (newPage: number) => {
    loadTransactions(newPage, meta.pageSize);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    loadTransactions(1, newPageSize);
  };

  return {
    transactions,
    isLoading,
    error,
    pagination: {
      ...meta,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange,
    }
  };
}