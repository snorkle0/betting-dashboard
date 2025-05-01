import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingBackdropProps {
  open: boolean;
  size?: number;
  zIndex?: number;
}

export const LoadingBackdrop = ({
  open,
  size = 40,
  zIndex = 1300,
}: LoadingBackdropProps) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex }} open={open}>
      <CircularProgress color="inherit" size={size} />
    </Backdrop>
  );
};
