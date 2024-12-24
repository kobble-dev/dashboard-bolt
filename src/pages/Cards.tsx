import { Outlet } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { CardManagement } from '../components/cards/CardManagement';

export function Cards() {
  return (
    <PageLayout title="Card Management" className="p-0">
      <CardManagement />
      <Outlet />
    </PageLayout>
  );
}