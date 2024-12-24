import { useNavigate } from 'react-router-dom';
import { useDrawerStore } from '../store/drawerStore';
import type { Card } from '../types/card';

export function useDrawerNavigation() {
  const navigate = useNavigate();
  const { selectedId, closeDrawer } = useDrawerStore();

  const handleRowClick = (card: Card) => {
    if (selectedId === card.id) {
      closeDrawer();
      navigate('/cards');
    } else {
      navigate(`/cards/${card.id}`);
    }
  };

  const handleClose = () => {
    closeDrawer();
    navigate('/cards');
  };

  return {
    handleRowClick,
    handleClose
  };
}