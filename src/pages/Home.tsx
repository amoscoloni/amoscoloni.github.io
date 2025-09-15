import React, { JSX } from 'react';

import Header from '../components/Header';
import { Grid, Stack, Typography } from '@mui/material';
import AboutTabGroup from '../components/AboutTabGroup';

export default function Home(): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Stack
        spacing={6}
        sx={{
          padding: '40px',
        }}
      >
        <Grid>
          <Header />
        </Grid>
        <AboutTabGroup />
      </Stack>
      {/* <Grid container style={{ alignItems: 'center' }}>
        <Typography style={{ maxWidth: '300px' }}>
          I am a software developer from Montreal, Canada. Currently working in
          the electrical engineering sector in C#, C++ and JScript, I am a
          developer with a wide range of interests. I have a particular interest
          in clean UI design, user accessibility and system architecture. Thank
          you for taking the time to get to know me a little better!
        </Typography>
      </Grid> */}
    </Grid>
  );
}
