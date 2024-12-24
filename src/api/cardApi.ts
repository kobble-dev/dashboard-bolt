import type { PaginatedResponse, PaginationParams } from '../types/api';
import type { Card } from '../types/card';
import { mockCards } from '../data/mockCards';

// Simulate API pagination
export async function getCards(params: PaginationParams): Promise<PaginatedResponse<Card>> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const { page, pageSize } = params;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  const paginatedData = mockCards.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    meta: {
      currentPage: page,
      pageSize,
      totalItems: mockCards.length,
      totalPages: Math.ceil(mockCards.length / pageSize),
    }
  };
}

export async function getCardById(id: string): Promise<Card | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCards.find(card => card.id === id) ?? null;
}