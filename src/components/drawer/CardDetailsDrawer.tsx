import { Paper } from '@mantine/core';
import { useDrawerStore } from '../../store/drawerStore';
import { useCardDetails } from '../../hooks/useCardDetails';
import { useDrawerNavigation } from '../../hooks/useDrawerNavigation';
import { DrawerHeader } from './DrawerHeader';
import { DrawerContent } from './DrawerContent';

export function CardDetailsDrawer() {
  const { isOpen, selectedId } = useDrawerStore();
  const { card, isLoading } = useCardDetails(selectedId);
  const { handleClose } = useDrawerNavigation();

  if (!isOpen || !selectedId) return null;

  return (
    <Paper
      className="fixed top-16 right-0 h-[calc(100vh-64px)] w-[333px] shadow-xl border-l bg-white border-gray-200 z-[45] flex flex-col transition-transform duration-300 translate-x-0"
    >
      <DrawerHeader onClose={handleClose} />
      <DrawerContent card={card} isLoading={isLoading} />
    </Paper>
  );
}