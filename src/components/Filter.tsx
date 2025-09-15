import { Button, Popover } from '@mui/material';
import React, { JSX } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterOption, { FilterOptionProps } from './FilterOption';

export interface FilterProps {
  filterOptions: FilterOptionProps[];
}

export default function Filter(props: FilterProps): JSX.Element {
  const idFilterButton = 'filter-button';
  const idFilterMenu = 'filter-options-menu';
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const isFilterOptionsOpen = Boolean(anchor);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <Button
        id={idFilterButton}
        aria-controls={isFilterOptionsOpen ? idFilterMenu : undefined}
        aria-haspopup="true"
        aria-expanded={isFilterOptionsOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <FilterListIcon />
      </Button>
      <Popover
        id={idFilterMenu}
        aria-labelledby={idFilterButton}
        anchorEl={anchor}
        open={isFilterOptionsOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {props.filterOptions.map((filterOption) => (
          <FilterOption
            id={filterOption.id}
            name={filterOption.name}
            onFilterOptionClicked={filterOption.onFilterOptionClicked}
          />
        ))}
      </Popover>
    </div>
  );
}
