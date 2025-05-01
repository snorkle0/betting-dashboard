import { Button } from '@mui/material';

import { useAddBet } from '../api/create-bet';

export const CreateBetButton = () => {
  const { mutate: addBet, isPending } = useAddBet();

  return (
    <Button
      variant="contained"
      onClick={() => addBet()}
      disabled={isPending}
      sx={{ mb: 3 }}
      fullWidth
      loading={isPending}
      loadingPosition="start"
    >
      Add Random Bet
    </Button>
  );
};
