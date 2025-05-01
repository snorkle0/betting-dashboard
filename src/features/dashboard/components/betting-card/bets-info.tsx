import { Box } from '@mui/material';

import { BetCount } from './bet-count';

type BetsInfoProps = {
  betsA: number;
  betsB: number;
};

export const BetsInfo = ({ betsA, betsB }: BetsInfoProps) => (
  <Box display="flex" justifyContent="space-between">
    <BetCount count={betsA} />
    <BetCount count={betsB} />
  </Box>
);
