import { AppShell } from '@mantine/core';
import { Navigation } from '../navigation/Navigation';
import { TopBar } from './TopBar';
import { useDrawerStore } from '../../store/drawerStore';
import { useNavigationStore } from '../../store/navigationStore';
import { useNavigationEffect } from '../../hooks/useNavigationEffect';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isOpen } = useDrawerStore();
  const { collapsed } = useNavigationStore();
  useNavigationEffect();

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{ 
        width: collapsed ? 80 : 240,
        breakpoint: 'sm',
        collapsed: { mobile: false },
      }}
      padding="0"
      layout="alt"
      className={`transition-all duration-300 ${isOpen ? 'mr-[333px]' : 'mr-0'}`}
      classNames={{
        header: 'left-0 right-0 w-full',
        navbar: 'border-r border-gray-200'
      }}
    >
      <AppShell.Header className="z-[200]">
        <TopBar />
      </AppShell.Header>
      <AppShell.Navbar pt="calc(var(--app-shell-header-height) + 0px)">
        <Navigation />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}