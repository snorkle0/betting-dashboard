import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { LoadingBackdrop } from '@/components/common/loading-backdrop';
import { AppLayout } from '@/components/layouts/app-layout';

export type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: AppRoot,
});

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' });
  return <LoadingBackdrop open={isLoading} />;
}

function AppRoot() {
  return (
    <AppLayout>
      <RouterSpinner />
      <Outlet />
      {import.meta.env.DEV && <ReactQueryDevtools buttonPosition="top-right" />}
      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </AppLayout>
  );
}
