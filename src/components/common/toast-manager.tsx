import { Alert, Snackbar } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { hideToast, selectToast } from '@/store/slices/toast-slice';

export const ToastManager = () => {
  const { open, message, severity } = useAppSelector(selectToast);
  const dispatch = useAppDispatch();

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(hideToast())}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        onClose={() => dispatch(hideToast())}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
