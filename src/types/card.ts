export interface Card {
  id: string;
  cardHolder: string;
  email: string;
  cardNumber: string;
  status: 'ACTIVATED' | 'ISSUED' | 'BLOCKED' | 'EXPIRED' | 'TERMINATED' | 'REISSUED';
  balance: number;
  wallet: string;
  avatar: string;
  // New fields
  displayName: string;
  cardType: 'Virtual' | 'Physical';
  cardProgram: 'Reloadable' | 'Single Use';
  issuedDate: string;
  expiryDate: string;
  cardholderId: string;
  address: string;
  walletDetails: {
    displayName: string;
    balance: number;
    currency: string;
    firstLoadDate: string;
    maxBalance: number;
  };
  programDetails: {
    name: string;
    company: string;
  };
}