import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';

import type { BettingCard } from '@/features/dashboard/types/betting-card';

let mockBets: BettingCard[] = [];

const generateBet = (): BettingCard => ({
  id: faker.string.uuid(),
  teamA: faker.company.name(),
  teamB: faker.company.name(),
  oddsA: parseFloat(faker.finance.amount({ min: 1.5, max: 3.5, dec: 2 })),
  oddsB: parseFloat(faker.finance.amount({ min: 1.5, max: 3.5, dec: 2 })),
  betsA: faker.number.int({ min: 10, max: 100 }),
  betsB: faker.number.int({ min: 10, max: 100 }),
});

export const bettingHandlers = [
  http.get('/api/bets', async () => {
    await delay(500);
    return HttpResponse.json(mockBets);
  }),
  http.post('/api/bets', async () => {
    const newBet = generateBet();
    mockBets = [newBet, ...mockBets];

    await delay(500);
    return HttpResponse.json(newBet, {
      status: 201,
    });
  }),
];
