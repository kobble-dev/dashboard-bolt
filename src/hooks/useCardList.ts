import { useState, useEffect } from 'react';
import type { Card } from '../types/card';
import type { PaginationMeta } from '../types/api';
import { getCards } from '../api/cardApi';
import { useSearchStore } from '../store/searchStore';

export function useCardList(initialPageSize: number = 10) {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [meta, setMeta] = useState<PaginationMeta>({
    currentPage: 1,
    pageSize: initialPageSize,
    totalItems: 0,
    totalPages: 0,
  });
  
  const { search } = useSearchStore();

  const loadCards = async (page: number, pageSize: number) => {
    try {
      setIsLoading(true);
      const response = await getCards({ page, pageSize });
      setCards(response.data);
      setMeta(response.meta);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load cards'));
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    loadCards(meta.currentPage, meta.pageSize);
  }, []);

  const handlePageChange = (newPage: number) => {
    loadCards(newPage, meta.pageSize);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    loadCards(1, newPageSize);
  };

  return {
    cards,
    isLoading,
    error,
    pagination: {
      ...meta,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange,
    }
  };
}