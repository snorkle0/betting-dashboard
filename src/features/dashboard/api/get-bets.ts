import { useSuspenseQuery } from '@tanstack/react-query';

import { useApiClient } from '@/hooks/use-api-client';

import type { BettingCard as Bet } from '../types/betting-card';

export const BETS_QUERY_KEY = ['bets'];

export function useBets() {
  const api = useApiClient();

  return useSuspenseQuery({
    queryKey: BETS_QUERY_KEY,
    queryFn: () => api<Bet[]>('/bets'),
    staleTime: 60 * 1000,
    initialData: [],
  });
}
