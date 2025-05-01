import { Card } from '@mui/material';

import type { BettingCard as BettingCardType } from '../../types/betting-card';
import { BettingCardContent } from './betting-card-content';

type BettingCardProps = {
  bet: BettingCardType;
};

export const BettingCard = ({ bet }: BettingCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'background.paper',
      }}
    >
      <BettingCardContent bet={bet} />
    </Card>
  );
};
