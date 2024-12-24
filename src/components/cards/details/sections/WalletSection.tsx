import { Stack, Button } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { InfoRow } from '../../../common/InfoRow';
import { formatCurrency } from '../../../../utils/format';
import type { Card } from '../../../../types/card';

interface WalletSectionProps {
  card: Card;
}

export function WalletSection({ card }: WalletSectionProps) {
  const { walletDetails } = card;
  
  return (
    <Stack gap="lg">
      <InfoRow label="Display Name">
        <span>{walletDetails.displayName}</span>
      </InfoRow>
      
      <InfoRow label="Balance">
        <span>{formatCurrency(walletDetails.balance, walletDetails.currency)}</span>
      </InfoRow>
      
      <InfoRow label="First load date">
        <span>{walletDetails.firstLoadDate}</span>
      </InfoRow>
      
      <InfoRow label="Maximum balance">
        <span>{formatCurrency(walletDetails.maxBalance, walletDetails.currency)}</span>
      </InfoRow>
      
      <Button
        className="bg-[#00875A] hover:bg-[#006644] text-white self-start"
        rightSection={<ChevronRight size={16} />}
      >
        Go to Wallet Management
      </Button>
    </Stack>
  );
}