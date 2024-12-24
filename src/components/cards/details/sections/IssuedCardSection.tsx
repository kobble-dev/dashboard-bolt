import { Stack, Group, Badge, Button } from '@mantine/core';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { InfoRow } from '../../../common/InfoRow';
import type { Card } from '../../../../types/card';

interface IssuedCardSectionProps {
  card: Card;
}

export function IssuedCardSection({ card }: IssuedCardSectionProps) {
  const navigate = useNavigate();

  return (
    <Stack gap="lg">
      <InfoRow label="Card Type">
        <Group gap="xs">
          <span className="w-4 h-4 rounded-full bg-violet-100" />
          <span>{card.cardType} {card.cardProgram}</span>
        </Group>
      </InfoRow>
      
      <InfoRow label="Display Name">
        <span>{card.displayName}</span>
      </InfoRow>
      
      <InfoRow label="Card Number">
        <span>{card.cardNumber}</span>
      </InfoRow>
      
      <Group gap="md">
        <InfoRow label="Issued">
          <span>{card.issuedDate}</span>
        </InfoRow>
        <InfoRow label="Expires on">
          <span>{card.expiryDate}</span>
        </InfoRow>
      </Group>
      
      <InfoRow label="Card Status">
        <Group>
          <Badge color="green" size="lg">ACTIVE</Badge>
          <Button 
            variant="light" 
            className="bg-[#00875A]/10 hover:bg-[#00875A]/20 text-[#00875A]"
            leftSection={<AlertCircle size={16} />}
            size="xs"
          >
            Block Card
          </Button>
        </Group>
      </InfoRow>

      <Button
        onClick={() => navigate(`/cards/${card.id}/transactions`)}
        rightSection={<ArrowRight size={16} />}
        className="bg-[#00875A] hover:bg-[#006644] text-white self-start"
      >
        Go to Card Transactions
      </Button>
    </Stack>
  );
}