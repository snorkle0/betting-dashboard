import { Box, Typography } from '@mui/material';

type OddsDisplayProps = {
  label: string;
  value: number;
};

export const OddsDisplay = ({ label, value }: OddsDisplayProps) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1">{value.toFixed(2)}</Typography>
  </Box>
);
