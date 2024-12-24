import { Group, Paper, Text, Badge } from '@mantine/core';
import type { Card } from '../../types';
import { formatCardNumber } from '../../utils/format';
import { CardArt } from './CardArt';

interface CardDetailsHeaderProps {
  card: Card;
}

export function CardDetailsHeader({ card }: CardDetailsHeaderProps) {
  return (
    <Paper className="p-6 mb-6 rounded-xl border border-gray-200">
      <Group align="flex-start" wrap="nowrap" className="gap-6">
        <div className="w-[240px] flex-none">
          <CardArt card={card} />
        </div>
        
        <div className="flex-1">
          <Group justify="space-between" className="mb-4">
            <div>
              <Text size="sm" c="dimmed">Display Name</Text>
              <Text size="lg" fw={500}>{card.cardHolder}</Text>
            </div>
            <Badge color="green" size="lg">ACTIVE</Badge>
          </Group>

          <div className="space-y-3">
            <div>
              <Text size="sm" c="dimmed">Cardholder</Text>
              <Text>{card.cardHolder} | {card.email}</Text>
            </div>
            
            <div>
              <Text size="sm" c="dimmed">Card Number</Text>
              <Text>{formatCardNumber(card.cardNumber)} | Valid thru 04/27</Text>
            </div>
            
            <div>
              <Text size="sm" c="dimmed">Wallet</Text>
              <Text>{card.wallet} | Balance of {card.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
            </div>
          </div>
        </div>
      </Group>
    </Paper>
  );
}