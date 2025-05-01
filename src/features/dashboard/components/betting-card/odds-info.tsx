import { Box } from '@mui/material';

import { OddsDisplay } from './odds-display';

type OddsInfoProps = {
  oddsA: number;
  oddsB: number;
};

export const OddsInfo = ({ oddsA, oddsB }: OddsInfoProps) => (
  <Box display="flex" justifyContent="space-between" mb={1}>
    <OddsDisplay label="Odds (A)" value={oddsA} />
    <OddsDisplay label="Odds (B)" value={oddsB} />
  </Box>
);
