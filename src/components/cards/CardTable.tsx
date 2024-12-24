import { DataTable } from '../table/DataTable';
import { CARD_TABLE_CONFIG } from '../../config/tableConfig';
import type { Card } from '../../types';
import type { PaginationMeta } from '../../types/api';

interface CardTableProps {
  cards: Card[];
  onRowClick: (card: Card) => void;
  selectedId?: string;
  pagination: PaginationMeta & {
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  };
}

export function CardTable({ 
  cards, 
  onRowClick, 
  selectedId,
  pagination 
}: CardTableProps) {
  return (
    <DataTable
      data={cards}
      config={CARD_TABLE_CONFIG}
      onRowClick={onRowClick}
      selectedId={selectedId}
      pagination={pagination}
    />
  );
}