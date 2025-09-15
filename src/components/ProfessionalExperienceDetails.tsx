import { Grid, List, ListItem, Typography } from '@mui/material';
import React, { JSX } from 'react';

export interface ProfessionalExperienceDetailsProp {
  details: string[];
}

export default function ProfessionalExperienceDetails(
  props: ProfessionalExperienceDetailsProp
): JSX.Element {
  // TODO add styles to stylesheet

  if (props.details.length === 0) {
    return (
      <Grid container justifyContent="center">
        <Typography sx={{ color: '#8E8E8E' }}>No details to show</Typography>
      </Grid>
    );
  } else {
    return (
      // TODO don't use index as ID
      <List>
        {props.details.map((detailEntry) => (
          <ListItem key={props.details.indexOf(detailEntry)}>
            <Typography sx={{ color: '#8E8E8E' }}>- {detailEntry}</Typography>
          </ListItem>
        ))}
      </List>
    );
  }
}
