import React, { JSX } from "react"

import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { headerStyle, secondaryStyle, tertiaryStyle } from "../styles/styles";
import TypewriterText from "./TypewriterText";

export enum LanguageProficiency {
    BEGINNER = "beginner",
    NATIVE = "native"
}

export interface LanguageProps {
    language: string
    languageProficiency: LanguageProficiency
}

export default function Language(): JSX.Element {
    return (
                    <Grid container sx={{width: "350px"}} justifyContent="space-between" alignItems="center">
                <Typography>English</Typography>
                <Grid sx={{width: "200px"}}>
                    <LinearProgress
                    variant="determinate"
                    sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#D57373",
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: "#D57373",
                        }
                    }} />
                </Grid>
                <Typography>Native</Typography>
            </Grid>
    );
}