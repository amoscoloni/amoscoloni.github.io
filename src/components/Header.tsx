import React, { JSX } from "react"

import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { headerStyle, secondaryStyle, tertiaryStyle } from "../styles/styles";
import TypewriterText from "./TypewriterText";

export default function Header(): JSX.Element {
    let introductionStrings = [
        "Hi, my name is",
        "Bonjour, je m'appelle",
        "Hola, me llamo",
        "Привет, меня зовут"
    ];

    return (
        <Box component="section">
            <TypewriterText stringsToType={introductionStrings} textStyle={headerStyle} />
            <Typography sx={headerStyle}>Anna</Typography>
            <Typography 
                sx={tertiaryStyle}
                width="525px"
                marginTop="20px">
                I am a software developer from Montreal, Canada. Currently working in the electrical engineering sector in C#, C++ and JScript, 
                I am a developer with a wide range of interests. I have a particular interest in clean UI design, user accessibility and system 
                architecture. Thank you for taking the time to get to know me a little better!
            </Typography>
        </Box>
    );
}