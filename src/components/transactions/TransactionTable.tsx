import { DataTable } from '../table/DataTable';
import type { Transaction } from '../../types/transaction';
import { TransactionStatusCell } from './cells/TransactionStatusCell';
import { TransactionTotalCell } from './cells/TransactionTotalCell';
import type { TableConfig } from '../../config/types';
import type { PaginationMeta } from '../../types/api';

interface TransactionTableProps {
  transactions: Transaction[];
  onRowClick?: (transaction: Transaction) => void;
  pagination: PaginationMeta & {
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  };
}

const TABLE_CONFIG: TableConfig<Transaction> = {
  columns: [
    {
      key: 'date',
      label: 'Date',
      sortable: true,
      width: '20%',
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: true,
      filterOptions: ['PENDING', 'SETTLED'],
      width: '20%',
      render: (value) => <TransactionStatusCell value={value as Transaction['status']} />,
    },
    {
      key: 'merchantName',
      label: 'Merchant Name',
      sortable: true,
      width: '40%',
    },
    {
      key: 'total',
      label: 'Total',
      sortable: true,
      width: '20%',
      align: 'right',
      render: (value) => <TransactionTotalCell value={value as number} />,
    },
  ],
  defaultPageSize: 15,
};

export function TransactionTable({ 
  transactions, 
  onRowClick,
  pagination
}: TransactionTableProps) {
  return (
    <DataTable
      data={transactions}
      config={TABLE_CONFIG}
      onRowClick={onRowClick}
      pagination={pagination}
    />
  );
}