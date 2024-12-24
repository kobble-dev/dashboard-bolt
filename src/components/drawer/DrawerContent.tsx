import { ScrollArea } from '@mantine/core';
import { CardInfo } from '../cards/details/CardInfo';
import { DrawerLoadingState } from './DrawerLoadingState';
import type { Card } from '../../types/card';

interface DrawerContentProps {
  card: Card | null;
  isLoading: boolean;
}

export function DrawerContent({ card, isLoading }: DrawerContentProps) {
  return (
    <ScrollArea className="flex-1">
      {isLoading ? (
        <DrawerLoadingState />
      ) : card ? (
        <div className="p-3">
          <CardInfo card={card} />
        </div>
      ) : null}
    </ScrollArea>
  );
}