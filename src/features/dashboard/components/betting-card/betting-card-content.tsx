import { CardContent, Divider } from '@mui/material';

import type { BettingCard as BettingCardType } from '../../types/betting-card';
import { BetsInfo } from './bets-info';
import { OddsInfo } from './odds-info';
import { TeamMatchup } from './team-matchup';

type BettingCardContentProps = {
  bet: BettingCardType;
};

export const BettingCardContent = ({ bet }: BettingCardContentProps) => (
  <CardContent sx={{ flex: 1 }}>
    <TeamMatchup teamA={bet.teamA} teamB={bet.teamB} />
    <Divider sx={{ my: 1.5 }} />
    <OddsInfo oddsA={bet.oddsA} oddsB={bet.oddsB} />
    <BetsInfo betsA={bet.betsA} betsB={bet.betsB} />
  </CardContent>
);
