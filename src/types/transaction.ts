export interface Transaction {
  id: string;
  date: string;
  status: 'PENDING' | 'SETTLED';
  merchantName: string;
  total: number;
}