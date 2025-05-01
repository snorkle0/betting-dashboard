import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Box, Typography } from '@mui/material';

type BetCountProps = {
  count: number;
};

export const BetCount = ({ count }: BetCountProps) => (
  <Box display="flex" alignItems="center">
    <SportsSoccerIcon fontSize="small" sx={{ mr: 0.5 }} />
    <Typography variant="caption">{count} bets</Typography>
  </Box>
);
