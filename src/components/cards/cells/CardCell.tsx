import { Text } from '@mantine/core';
import { formatCardNumber } from '../../../utils/format';

interface CardCellProps {
  value: string;
}

export function CardCell({ value }: CardCellProps) {
  return (
    <Text size="sm" c="dark">
      {formatCardNumber(value)}
    </Text>
  );
}