import React, { JSX } from 'react';

import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { secondaryStyle } from '../styles/styles';

export interface NavBarButtonProps {
  label: string;
  link: string;
  isExternalLink?: boolean;
}

export default function NavBarButton(props: NavBarButtonProps): JSX.Element {
  return (
    <Box>
      <NavLink
        to={props.link}
        style={{
          textDecoration: 'none',
        }}
        target={props.isExternalLink ? '_blank' : undefined}
        rel={props.isExternalLink ? 'noreferrer noopener' : undefined}
        aria-label={props.label}
      >
        <Typography sx={secondaryStyle}>{props.label}</Typography>
      </NavLink>
    </Box>
  );
}
