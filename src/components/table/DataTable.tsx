import { Table } from '@mantine/core';
import { TableHeaderCell } from './TableHeaderCell';
import { TablePagination } from './TablePagination';
import { useTableSort } from '../../hooks/useTableSort';
import type { TableConfig } from '../../config/types';
import type { PaginationMeta } from '../../types/api';

interface DataTableProps<T extends { id: string }> {
  data: T[];
  config: TableConfig<T>;
  onRowClick?: (row: T) => void;
  selectedId?: string;
  pagination: PaginationMeta & {
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  };
}

export function DataTable<T extends { id: string }>({ 
  data,
  config,
  onRowClick,
  selectedId,
  pagination,
}: DataTableProps<T>) {
  const { sortedData, sortConfig, toggleSort } = useTableSort(data);

  return (
    <div>
      <TablePagination 
        total={pagination.totalItems}
        page={pagination.currentPage}
        pageSize={pagination.pageSize}
        onPageChange={pagination.onPageChange}
        onPageSizeChange={pagination.onPageSizeChange}
      />
      
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <Table 
          verticalSpacing="sm" 
          horizontalSpacing="md"
          withTableBorder={false}
          withColumnBorders={false}
          withRowBorders={false}
        >
          <Table.Thead className="bg-[#1A1B1E]">
            <Table.Tr>
              {config.columns.map((column, index) => (
                <TableHeaderCell
                  key={column.key.toString()}
                  column={column}
                  sortConfig={sortConfig}
                  onSort={toggleSort}
                  isFirst={index === 0}
                  isLast={index === config.columns.length - 1}
                />
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {sortedData.map((row) => (
              <Table.Tr 
                key={row.id}
                onClick={() => onRowClick?.(row)}
                className={`cursor-pointer transition-colors duration-150 ${
                  row.id === selectedId 
                    ? 'bg-gray-100 hover:bg-gray-100' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {config.columns.map((column) => (
                  <Table.Td 
                    key={column.key.toString()}
                    style={{ width: column.width }}
                    align={column.align}
                  >
                    {column.render 
                      ? column.render(row[column.key], row)
                      : String(row[column.key])
                    }
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}