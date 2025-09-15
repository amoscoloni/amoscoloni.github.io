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
        chipStyle.backgroundColor = '#F5E9E9';
      }
      break;

    case SkillCategory.ARCHITECTURE:
      {
        chipStyle.backgroundColor = '#d1caca';
      }
      break;

    case SkillCategory.FRAMEWORK:
      {
        chipStyle.backgroundColor = '#D8D0D0';
      }
      break;

    case SkillCategory.CONCEPT:
      {
        chipStyle.backgroundColor = '#E2E2E2';
      }
      break;

    case SkillCategory.TOOL:
      {
        chipStyle.backgroundColor = '#DCD0D0';
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
