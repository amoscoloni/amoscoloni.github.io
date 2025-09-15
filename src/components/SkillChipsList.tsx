import React, { JSX } from 'react';

import { Box, Chip, List, ListItem } from '@mui/material';
import { Skill } from '../models/Skill';
import SkillChip from './SkillChip';

export interface SkillChipsListProps {
  skills: Skill[];
}

export default function SkillChipsList(
  props: SkillChipsListProps
): JSX.Element {
  return (
    <Box>
      <List sx={{ height: 300, overflow: 'auto' }}>
        {props.skills.map((skill) => (
          <SkillChip skill={skill} />
        ))}
      </List>
    </Box>
  );
}
