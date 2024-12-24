import type { Card } from '../types/card';

export const mockCards: Card[] = Array(20).fill(null).map((_, index) => ({
  id: (index + 1).toString(),
  displayName: 'Shouta Mastercard Debit',
  cardType: 'Virtual',
  cardProgram: 'Reloadable',
  cardHolder: [
    'Liam Byrne',
    'Sarah Harrison',
    'Nick Stevens',
    'Emma Thompson',
    'Michael Chen',
  ][index % 5],
  email: `user${index + 1}@example.com`,
  cardNumber: Array(4).fill(0).map(() => 
    Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  ).join(' '),
  status: ['ACTIVATED', 'ISSUED', 'BLOCKED', 'EXPIRED', 'TERMINATED'][Math.floor(Math.random() * 5)],
  balance: parseFloat((Math.random() * 10000).toFixed(2)),
  wallet: ['USD Wallet', 'EUR Wallet', 'GBP Wallet'][Math.floor(Math.random() * 3)],
  avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
  issuedDate: '31/05/2021',
  expiryDate: '31/05/2024',
  cardholderId: `QLS${(102 + index).toString()}NNX`,
  address: '231, 74 Eastern road, South Melbourne',
  walletDetails: {
    displayName: 'Main Customer Wallet',
    balance: 121.00,
    currency: 'AUD',
    firstLoadDate: '31/05/2021',
    maxBalance: 500.00
  },
  programDetails: {
    name: 'Generic Userbase',
    company: 'Shouta'
  }
}));