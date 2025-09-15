import React, { JSX } from 'react';

import { Box, List } from '@mui/material';
import { ProfessionalExperience } from '../models/ProfessionalExperience';
import ProfessionalExperienceEntry from './ProfessionalExperienceEntry';

export interface ProfessionalExperienceEntryListProps {
  professionalExperiences: ProfessionalExperience[];
}

export default function ProfessionalExperienceEntryList(
  props: ProfessionalExperienceEntryListProps
): JSX.Element {
  return (
    <Box>
      <List sx={{ overflow: 'auto' }}>
        {props.professionalExperiences.map((professionalExperience) => (
          <ProfessionalExperienceEntry
            professionalExperience={professionalExperience}
          />
        ))}
      </List>
    </Box>
  );
}
