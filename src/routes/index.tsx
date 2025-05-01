import { createFileRoute } from '@tanstack/react-router';

import { BetGrid } from '@/features/dashboard/components/bet-grid';
import { CreateBetButton } from '@/features/dashboard/components/create-bet-button';
import { DashboardLayout } from '@/features/dashboard/components/dashboard-layout';

export const Route = createFileRoute('/')({
  component: App,
});

export function App() {
  return (
    <DashboardLayout title="Betting Dashboard">
      <CreateBetButton />
      <BetGrid />
    </DashboardLayout>
  );
}
