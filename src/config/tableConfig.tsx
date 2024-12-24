import { type ReactNode } from 'react';
import type { TableConfig } from './types';
import type { Card } from '../types';
import { CardHolderCell, CardCell, StatusCell, BalanceCell } from '../components/cards/cells';

export const CARD_TABLE_CONFIG: TableConfig<Card> = {
  columns: [
    {
      key: 'cardHolder',
      label: 'Cardholder',
      sortable: true,
      width: '30%',
      render: (_, row): ReactNode => (
        <CardHolderCell 
          name={row.cardHolder} 
          email={row.email} 
        />
      ),
    },
    {
      key: 'cardNumber',
      label: 'Card',
      sortable: true,
      width: '25%',
      render: (value): ReactNode => (
        <CardCell value={value as string} />
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: true,
      filterOptions: ['ACTIVATED', 'ISSUED', 'BLOCKED', 'EXPIRED', 'TERMINATED', 'REISSUED'],
      width: '20%',
      align: 'center',
      render: (value): ReactNode => (
        <StatusCell value={value as Card['status']} />
      ),
    },
    {
      key: 'balance',
      label: 'Balance',
      sortable: true,
      width: '25%',
      align: 'right',
      render: (value, row): ReactNode => (
        <BalanceCell 
          value={value as number} 
          wallet={row.wallet} 
        />
      ),
    },
  ],
  defaultSort: {
    key: 'cardHolder',
    direction: 'asc',
  },
  defaultPageSize: 10,
};