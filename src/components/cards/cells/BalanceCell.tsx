import { Group, Text } from '@mantine/core';
import { formatCurrency } from '../../../utils/format';

interface BalanceCellProps {
  value: number;
  wallet: string;
}

export function BalanceCell({ value, wallet }: BalanceCellProps) {
  return (
    <Group gap="xs">
      <Text size="sm" fw={500} c="dark">
        {formatCurrency(value)}
      </Text>
      <Text size="xs" c="dimmed">
        {wallet}
      </Text>
    </Group>
  );
}