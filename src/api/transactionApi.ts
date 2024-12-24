import type { PaginatedResponse, PaginationParams } from '../types/api';
import type { Transaction } from '../types/transaction';
import { mockTransactions } from '../data/mockTransactions';

export async function getTransactions(
  cardId: string, 
  params: PaginationParams
): Promise<PaginatedResponse<Transaction>> {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const { page, pageSize } = params;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  const paginatedData = mockTransactions.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    meta: {
      currentPage: page,
      pageSize,
      totalItems: mockTransactions.length,
      totalPages: Math.ceil(mockTransactions.length / pageSize),
    }
  };
}