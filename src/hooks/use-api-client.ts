import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { apiClient } from '@/lib/api-client';
import { showToast } from '@/store/slices/toast-slice';

export function useApiClient() {
  const dispatch = useDispatch();

  const request = useCallback(
    async <T>(
      endpoint: string,
      options?: Parameters<typeof apiClient<T>>[1],
    ): Promise<T | null> => {
      try {
        return await apiClient<T>(endpoint, options);
      } catch (err: any) {
        dispatch(
          showToast({
            message: err?.message || 'Unexpected error',
            severity: 'error',
          }),
        );
        throw err;
      }
    },
    [dispatch],
  );

  return request;
}
