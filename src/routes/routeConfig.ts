import { Home, CreditCard, Users, MessageSquare, Wallet, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Route {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: Home,
  },
  {
    path: '/cards',
    label: 'Card Management',
    icon: CreditCard,
  },
  {
    path: '/users',
    label: 'Users',
    icon: Users,
  },
  {
    path: '/wallets',
    label: 'Wallets',
    icon: Wallet,
  },
  {
    path: '/messages',
    label: 'Messages',
    icon: MessageSquare,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: Settings,
  },
];