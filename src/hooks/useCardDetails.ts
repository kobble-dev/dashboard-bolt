import { useState, useEffect } from 'react';
import type { Card } from '../types/card';
import { getCardById } from '../api/cardApi';

export function useCardDetails(id: string | null) {
  const [card, setCard] = useState<Card | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setCard(null);
      return;
    }

    const loadCard = async () => {
      try {
        setIsLoading(true);
        const data = await getCardById(id);
        setCard(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load card'));
      } finally {
        setIsLoading(false);
      }
    };

    loadCard();
  }, [id]);

  return { card, isLoading, error };
}