import { Stack } from '@mantine/core';
import { NavLink } from './NavLink';
import { useNavigationStore } from '../../store/navigationStore';
import { useLocation } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';

export function Navigation() {
  const { collapsed } = useNavigationStore();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Stack gap="xs" p="md">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          icon={route.icon}
          label={collapsed ? '' : route.label}
          to={route.path}
          active={isActive(route.path)}
        />
      ))}
    </Stack>
  );
}