import React, { JSX } from 'react';

import ConstructionIcon from '@mui/icons-material/Construction';
import { Grid, Stack, Typography } from '@mui/material';

export default function Projects(): JSX.Element {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '50vh' }}
    >
      <Grid container direction="column">
        <ConstructionIcon style={{ margin: 'auto' }} fontSize="large" />
        <Typography>In construction</Typography>
      </Grid>
    </Grid>
  );
}
