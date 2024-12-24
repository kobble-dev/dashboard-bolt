import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CardTable } from './CardTable';
import { LoadingState } from '../loading/LoadingState';
import { CardActions } from './CardActions';
import { useCardList } from '../../hooks/useCardList';
import { useDrawerStore } from '../../store/drawerStore';
import { useDrawerNavigation } from '../../hooks/useDrawerNavigation';

export function CardManagement() {
  const { id } = useParams();
  const { selectedId, openDrawer } = useDrawerStore();
  const { handleRowClick } = useDrawerNavigation();
  const { cards, isLoading, error, pagination } = useCardList(10);

  useEffect(() => {
    if (id && id !== selectedId) {
      openDrawer(id);
    }
  }, [id, selectedId, openDrawer]);

  if (error) {
    throw error;
  }

  return (
    <div>
      <CardActions />
      {isLoading ? (
        <LoadingState message="Loading cards..." />
      ) : (
        <CardTable 
          cards={cards}
          onRowClick={handleRowClick}
          selectedId={selectedId}
          pagination={pagination}
        />
      )}
    </div>
  );
}