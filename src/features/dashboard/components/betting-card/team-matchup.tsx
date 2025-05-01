import { Box, Typography } from '@mui/material';

type TeamMatchupProps = {
  teamA: string;
  teamB: string;
};

export const TeamMatchup = ({ teamA, teamB }: TeamMatchupProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr auto 1fr"
      gap={1}
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontSize: {
              xs: 'min(16px, 4.5vw)',
              sm: 'min(18px, 2vw)',
              md: '1.25rem',
            },
            lineHeight: 1.2,
            textAlign: 'left',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          {teamA}
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ px: 1 }}>
        vs
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontSize: {
              xs: 'min(16px, 4.5vw)',
              sm: 'min(18px, 2vw)',
              md: '1.25rem',
            },
            lineHeight: 1.2,
            textAlign: 'right',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          {teamB}
        </Typography>
      </Box>
    </Box>
  );
};
