import { Stack, Button } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { InfoRow } from '../../../common/InfoRow';
import type { Card } from '../../../../types/card';

interface ProgramSectionProps {
  card: Card;
}

export function ProgramSection({ card }: ProgramSectionProps) {
  const { programDetails } = card;
  
  return (
    <Stack gap="lg">
      <InfoRow label="Program">
        <span>{programDetails.name}</span>
      </InfoRow>
      
      <InfoRow label="Company">
        <span>{programDetails.company}</span>
      </InfoRow>
      
      <Button
        className="bg-[#00875A] hover:bg-[#006644] text-white self-start"
        rightSection={<ChevronRight size={16} />}
      >
        Go to Client Dashboard
      </Button>
    </Stack>
  );
}