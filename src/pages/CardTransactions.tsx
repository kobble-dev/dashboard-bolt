import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { CardDetailsHeader } from '../components/cards/CardDetailsHeader';
import { TransactionTable } from '../components/transactions/TransactionTable';
import { CardNotFound } from '../components/error/CardNotFound';
import { LoadingState } from '../components/loading/LoadingState';
import { useCardList } from '../hooks/useCardList';
import { useTransactionList } from '../hooks/useTransactionList';

export function CardTransactions() {
  const { id } = useParams<{ id: string }>();
  const { cards, isLoading: isLoadingCard } = useCardList(10);
  const { 
    transactions, 
    isLoading: isLoadingTransactions,
    pagination 
  } = useTransactionList(id!, 15);

  if (isLoadingCard || isLoadingTransactions) {
    return <LoadingState />;
  }

  const card = cards.find(c => c.id === id);
  if (!card) {
    return (
      <PageLayout title="Card Not Found">
        <CardNotFound />
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Card Transactions" className="p-0">
      <CardDetailsHeader card={card} />
      <TransactionTable 
        transactions={transactions} 
        pagination={pagination}
      />
    </PageLayout>
  );
}