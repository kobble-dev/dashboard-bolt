import { Badge } from '@mantine/core';
import type { Transaction } from '../../../types/transaction';

interface TransactionStatusCellProps {
  value: Transaction['status'];
}

export function TransactionStatusCell({ value }: TransactionStatusCellProps) {
  return (
    <Badge 
      color={value === 'SETTLED' ? 'green' : 'gray'} 
      variant={value === 'SETTLED' ? 'filled' : 'light'}
    >
      {value}
    </Badge>
  );
}