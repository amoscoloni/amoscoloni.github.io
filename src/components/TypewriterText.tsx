import React, { JSX, useEffect, useState } from 'react';

import { Box, SxProps, Theme, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export interface TypewriterTextProps {
  stringsToType: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number; // ms per character
  delayBetweenStrings?: number; // ms to pause between strings
  textStyle?: SxProps<Theme>;
}

export default function TypewriterText({
  stringsToType,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenStrings = 1000,
  textStyle,
}: TypewriterTextProps): JSX.Element {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  let typingFunction = (difference: number) => {
    let currentString = stringsToType[currentIndex];
    let newDisplayString = currentString.slice(
      0,
      displayedText.length + difference
    );

    setDisplayedText(newDisplayString);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentString = stringsToType[currentIndex];

    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => typingFunction(-1), deletingSpeed);
      } else if (displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((index) => (index + 1) % stringsToType.length);
      }
    } else {
      if (displayedText.length < currentString.length) {
        timer = setTimeout(() => typingFunction(1), typingSpeed);
      } else if (displayedText.length === currentString.length) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenStrings);
      }
    }
  }, [
    displayedText,
    isDeleting,
    currentIndex,
    stringsToType,
    typingSpeed,
    deletingSpeed,
    delayBetweenStrings,
  ]);

  return <Typography sx={textStyle}>{displayedText || '\u00A0'}</Typography>;
}
