import type { ReactNode } from 'react';

import { Typography } from '@mui/material';

type DashboardLayoutProps = {
  title?: string;
  children: ReactNode;
};

export const DashboardLayout = ({
  title = 'Betting Dashboard',
  children,
}: DashboardLayoutProps) => {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 600, textAlign: 'center' }}
      >
        {title}
      </Typography>
      {children}
    </>
  );
};
