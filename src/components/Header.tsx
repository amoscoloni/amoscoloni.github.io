import React, { JSX } from 'react';

import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { headerStyle, secondaryStyle, tertiaryStyle } from '../styles/styles';
import TypewriterText from './TypewriterText';

export default function Header(): JSX.Element {
  let introductionStrings = [
    "Bonjour, je m'appelle",
    'Hola, me llamo',
    'Привет, меня зовут',
  ];

  return (
    <Box component="section" padding="12px">
      <TypewriterText
        stringsToType={introductionStrings}
        textStyle={headerStyle}
      />
      <Typography sx={headerStyle}>Anna</Typography>
      <Typography sx={tertiaryStyle} width="525px" marginTop="20px">
        I am a software developer from Montreal, Canada. Currently working in
        the electrical engineering sector in C#, C++ and JScript, I have a wide
        range of interests and a passion for learning. I have a particular
        interest in UI design, user accessibility and system architecture.
      </Typography>
    </Box>
  );
}
