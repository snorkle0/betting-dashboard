import { Box, Grid, Typography } from '@mui/material';

import { LoadingBackdrop } from '@/components/common/loading-backdrop';

import { useBets } from '../api/get-bets';
import { BettingCard } from './betting-card/index';

export const BetGrid = () => {
  const { data: bets, isLoading, isFetching } = useBets();

  if (!bets || bets.length === 0) {
    return (
      <>
        <LoadingBackdrop
          open={isLoading || isFetching}
          size={50}
          zIndex={1000}
        />{' '}
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            backgroundColor: 'background.paper',
            borderRadius: 1,
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            You currently don't have any active bets
          </Typography>
          <Typography variant="body1">
            Click the button above to generate one!
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <LoadingBackdrop open={isLoading || isFetching} size={50} zIndex={1000} />

      <Grid container spacing={2}>
        {bets.map((bet) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={bet.id}>
            <BettingCard bet={bet} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
