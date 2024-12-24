import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDrawerStore } from '../store/drawerStore';

export function useNavigationEffect() {
  const location = useLocation();
  const { closeDrawer } = useDrawerStore();

  useEffect(() => {
    // Only close drawer when navigating to a non-card detail route
    if (!location.pathname.match(/^\/cards\/[^/]+$/)) {
      closeDrawer();
    }
  }, [location.pathname, closeDrawer]);
}