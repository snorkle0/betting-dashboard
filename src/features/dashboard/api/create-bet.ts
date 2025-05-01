import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useApiClient } from '@/hooks/use-api-client';
import { useAppDispatch } from '@/store/hooks';
import { showToast } from '@/store/slices/toast-slice';

import type { BettingCard as Bet } from '../types/betting-card';
import { BETS_QUERY_KEY } from './get-bets';

export function useAddBet() {
  const api = useApiClient();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: () =>
      api<Bet>('/bets', {
        method: 'POST',
        body: JSON.stringify({}),
      }),
    onSuccess: () => {
      dispatch(showToast({ message: 'Bet added!', severity: 'success' }));
      queryClient.invalidateQueries({ queryKey: BETS_QUERY_KEY });
    },
    onError: () => {
      dispatch(showToast({ message: 'Failed to add bet.', severity: 'error' }));
    },
  });
}
