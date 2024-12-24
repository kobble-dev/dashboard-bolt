import { Stack, Button } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { InfoRow } from '../../../common/InfoRow';
import type { Card } from '../../../../types/card';

interface CardholderSectionProps {
  card: Card;
}

export function CardholderSection({ card }: CardholderSectionProps) {
  return (
    <Stack gap="lg">
      <InfoRow label="Name">
        <span>{card.cardHolder}</span>
      </InfoRow>
      
      <InfoRow label="Cardholder ID">
        <span>{card.cardholderId}</span>
      </InfoRow>
      
      <InfoRow label="Address">
        <span>{card.address}</span>
      </InfoRow>
      
      <Button
        className="bg-[#00875A] hover:bg-[#006644] text-white self-start"
        rightSection={<ChevronRight size={16} />}
      >
        Go to Customer
      </Button>
    </Stack>
  );
}