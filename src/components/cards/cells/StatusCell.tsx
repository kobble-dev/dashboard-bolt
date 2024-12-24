import { Badge } from '@mantine/core';
import type { Card } from '../../../types';

interface StatusCellProps {
  value: Card['status'];
}

const statusConfig: Record<Card['status'], { color: string; variant: 'filled' | 'light' }> = {
  ACTIVATED: { color: 'green', variant: 'filled' },
  ISSUED: { color: 'blue', variant: 'light' },
  BLOCKED: { color: 'red', variant: 'filled' },
  EXPIRED: { color: 'gray', variant: 'light' },
  TERMINATED: { color: 'dark', variant: 'filled' },
  REISSUED: { color: 'violet', variant: 'light' },
};

export function StatusCell({ value }: StatusCellProps) {
  const config = statusConfig[value];
  
  return (
    <Badge 
      color={config.color}
      variant={config.variant}
      size="lg"
      className="font-medium tracking-wider px-3 py-1"
    >
      {value}
    </Badge>
  );
}