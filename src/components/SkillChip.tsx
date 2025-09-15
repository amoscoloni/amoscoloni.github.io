import React, { JSX } from 'react';

import { Chip, ListItem } from '@mui/material';
import { Skill, SkillCategory } from '../models/Skill';

export interface SkillChipProps {
  skill: Skill;
}

export default function SkillChip(props: SkillChipProps): JSX.Element {
  const chipStyle = {
    backgroundColor: '',
    margin: '5px',
  };

  switch (props.skill.category) {
    case SkillCategory.PROGRAMMING_LANGUAGE:
      {
        chipStyle.backgroundColor = '#E0D6D6';
      }
      break;

    case SkillCategory.ARCHITECTURE:
      {
        chipStyle.backgroundColor = '#d1caca';
      }
      break;

    case SkillCategory.FRAMEWORK:
      {
        chipStyle.backgroundColor = '#c7bebe';
      }
      break;

    case SkillCategory.CONCEPT:
      {
        chipStyle.backgroundColor = '#d7ced1';
      }
      break;

    case SkillCategory.TOOL:
      {
        chipStyle.backgroundColor = '#bbb0b0';
      }
      break;

    default: {
      // TODO assign default color
      // TODO add trace message about unsupported enum for dev
    }
  }
  return (
    <ListItem
      key={props.skill.id}
      style={{ display: 'inline', margin: '5px', padding: '0px' }}
    >
      <Chip label={props.skill.name} style={chipStyle} />
    </ListItem>
  );
}
