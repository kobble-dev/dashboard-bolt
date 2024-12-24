import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Cards } from '../pages/Cards';
import { CardDetails } from '../pages/CardDetails';
import { CardTransactions } from '../pages/CardTransactions';
import { Users } from '../pages/Users';
import { Wallets } from '../pages/Wallets';
import { Messages } from '../pages/Messages';
import { Settings } from '../pages/Settings';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cards" element={<Cards />}>
        <Route path=":id" element={<CardDetails />} />
      </Route>
      <Route path="/cards/:id/transactions" element={<CardTransactions />} />
      <Route path="/users" element={<Users />} />
      <Route path="/wallets" element={<Wallets />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}