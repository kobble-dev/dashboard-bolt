import { Text } from '@mantine/core';
import type { Card } from '../../types';
import { formatCardNumber } from '../../utils/format';

interface CardArtProps {
  card: Card;
  className?: string;
}

export function CardArt({ card, className = '' }: CardArtProps) {
  return (
    <div className={`w-full h-[200px] rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="w-full h-full relative bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#d946ef]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-16 -translate-x-16" />
        
        {/* Card content */}
        <div className="relative h-full p-4 flex flex-col justify-between">
          <div>
            <Text size="xs" className="text-white/80 uppercase tracking-wider font-medium mb-1">
              Virtual Card
            </Text>
            <Text size="lg" fw={700} className="text-white mb-2">
              Shouta
            </Text>
          </div>
          
          <div>
            <Text size="sm" className="text-white mb-2 font-mono">
              {formatCardNumber(card.cardNumber)}
            </Text>
            <Text size="xs" className="text-white/80">
              {card.cardHolder}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}