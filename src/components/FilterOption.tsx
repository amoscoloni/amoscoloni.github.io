import { Checkbox, FormControlLabel } from '@mui/material';
import React, { JSX } from 'react';

export interface FilterOptionProps {
  id: string;
  name: string;
  onFilterOptionClicked: React.ReactEventHandler;
}

export default function FilterOption(props: FilterOptionProps): JSX.Element {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            style={{ margin: '5px' }}
            onChange={props.onFilterOptionClicked}
          />
        }
        label={props.name}
      />
    </div>
  );
}
