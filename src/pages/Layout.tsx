import React, { JSX } from 'react';

import { Grid } from '@mui/material';
import { PATH } from '../routes';
import NavBarButton from '../components/NavBarButton';

export default function Layout(): JSX.Element {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        padding: '14px',
      }}
    >
      <NavBarButton link={PATH.home} label="Anna Moscoloni" />
      <Grid container spacing={4}>
        <NavBarButton link={PATH.home} label="Home" />
        <NavBarButton link={PATH.projects} label="Projects" />
      </Grid>
    </Grid>
  );
}
