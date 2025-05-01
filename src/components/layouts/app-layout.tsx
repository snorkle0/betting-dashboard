import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, Container } from '@mui/material';

type AppLayoutProps = {
  title?: string;
  children: ReactNode;
};

export const AppLayout = ({
  title = 'Betting App',
  children,
}: AppLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${title} - Betting Dashboard`} />
      </Helmet>

      <Box
        component="main"
        role="main"
        sx={{
          py: 4,
          px: 2,
          backgroundColor: (theme) => theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </>
  );
};
