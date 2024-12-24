import { Table } from '@mantine/core';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { SortDirection } from '../../hooks/useTableSort';

interface TableHeaderCellProps<T> {
  column: {
    key: keyof T;
    label: string;
    sortable?: boolean;
  };
  sortConfig: {
    key: keyof T | null;
    direction: SortDirection;
  };
  onSort: (key: keyof T) => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export function TableHeaderCell<T>({
  column,
  sortConfig,
  onSort,
  isFirst,
  isLast,
}: TableHeaderCellProps<T>) {
  const isActive = sortConfig.key === column.key;

  return (
    <Table.Th
      className={`text-white px-6 py-4 ${isFirst ? 'first:rounded-tl-xl' : ''} ${
        isLast ? 'last:rounded-tr-xl' : ''
      }`}
    >
      {column.sortable ? (
        <button
          onClick={() => onSort(column.key)}
          className="w-full text-left text-white hover:opacity-80 flex items-center justify-between"
        >
          <span className="text-sm">{column.label}</span>
          {isActive && (
            <span className="ml-2">
              {sortConfig.direction === 'asc' ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )}
            </span>
          )}
        </button>
      ) : (
        <span className="text-sm">{column.label}</span>
      )}
    </Table.Th>
  );
}