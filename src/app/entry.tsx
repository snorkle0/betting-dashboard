import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';

import { ToastManager } from '@/components/common/toast-manager';
import { queryClient } from '@/lib/tanstack-query';
import { store } from '@/store';

import { AppRouter } from './router';

export const AppEntry = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HelmetProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastManager />
              <AppRouter />
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </HelmetProvider>
    </Suspense>
  );
};
