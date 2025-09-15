import React, { JSX } from 'react';

import { ProfessionalExperience } from '../models/ProfessionalExperience';
import {
  Box,
  Grid,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProfessionalExperienceDetails from './ProfessionalExperienceDetails';

export interface ProfessionalExperienceEntryProps {
  professionalExperience: ProfessionalExperience;
}

export default function ProfessionalExperienceEntry(
  props: ProfessionalExperienceEntryProps
): JSX.Element {
  const [isDetailsDropdownOpen, setIsDetailsDropdownOpen] =
    React.useState(false);

  // TODO add colors to stylesheet
  return (
    <ListItem key={props.professionalExperience.id}>
      <Stack style={{ width: '100%' }}>
        <Grid container justifyContent="space-between">
          <Grid container alignItems="center">
            <IconButton
              aria-label="toggle professional experience"
              onClick={() => setIsDetailsDropdownOpen(!isDetailsDropdownOpen)}
            >
              {isDetailsDropdownOpen ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </IconButton>
            <Typography sx={{ color: '#766F6F' }}>
              {props.professionalExperience.name}
            </Typography>
          </Grid>
          <Typography sx={{ color: '#766F6F' }}>
            {props.professionalExperience.getYearsInRoleString()}
          </Typography>
          {isDetailsDropdownOpen && (
            <ProfessionalExperienceDetails
              details={props.professionalExperience.details}
            />
          )}
        </Grid>
      </Stack>
    </ListItem>
  );
}
