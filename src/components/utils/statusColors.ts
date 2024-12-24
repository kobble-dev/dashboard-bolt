import type { Card } from '../../types/card';

const statusColorMap: Record<Card['status'], string> = {
  ACTIVATED: 'teal',
  ISSUED: 'blue',
  BLOCKED: 'red',
  EXPIRED: 'gray',
  TERMINATED: 'dark',
  REISSUED: 'violet',
};

export const getStatusColor = (status: Card['status']): string => statusColorMap[status];