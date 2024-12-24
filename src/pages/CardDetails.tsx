import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CardDetailsDrawer } from '../components/drawer/CardDetailsDrawer';
import { useDrawerStore } from '../store/drawerStore';

export function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const { openDrawer } = useDrawerStore();
  
  useEffect(() => {
    if (id) {
      openDrawer(id);
    }
  }, [id, openDrawer]);
  
  return <CardDetailsDrawer />;
}