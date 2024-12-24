import { Section } from '../../common/Section';
import { CardArt } from '../CardArt';
import { IssuedCardSection } from './sections/IssuedCardSection';
import { CardholderSection } from './sections/CardholderSection';
import { WalletSection } from './sections/WalletSection';
import { ProgramSection } from './sections/ProgramSection';
import type { Card } from '../../../types/card';

interface CardInfoProps {
  card: Card;
}

export function CardInfo({ card }: CardInfoProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <CardArt card={card} />
      </div>
      
      <Section title="Issued Card">
        <IssuedCardSection card={card} />
      </Section>
      
      <Section title="Cardholder Information">
        <CardholderSection card={card} />
      </Section>
      
      <Section title="Wallet details">
        <WalletSection card={card} />
      </Section>
      
      <Section title="Card Program">
        <ProgramSection card={card} />
      </Section>
    </div>
  );
}