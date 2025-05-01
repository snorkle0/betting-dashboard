import {
  ErrorComponent,
  RouterProvider,
  createRouter,
} from '@tanstack/react-router';

import { queryClient } from '@/lib/tanstack-query';
import { routeTree } from '@/routeTree.gen';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
});

export const AppRouter = () => {
  return (
    <RouterProvider
      router={router}
      context={{ queryClient }}
      defaultPreload="intent"
    />
  );
};
