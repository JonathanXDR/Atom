'use client';
import { Box, Spinner } from '@primer/react';

export default function Loading() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner size="large" />
    </Box>
  );
}
