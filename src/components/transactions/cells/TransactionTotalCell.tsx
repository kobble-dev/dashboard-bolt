import { Text } from '@mantine/core';
import { formatCurrency } from '../../../utils/format';

interface TransactionTotalCellProps {
  value: number;
}

export function TransactionTotalCell({ value }: TransactionTotalCellProps) {
  return (
    <Text size="sm" fw={500}>
      {formatCurrency(value)}
    </Text>
  );
}