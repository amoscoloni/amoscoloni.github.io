import { Grid, Box, Tabs, Tab, Typography } from "@mui/material";
import React, { JSX } from "react";
import TypewriterText from "../components/TypewriterText";
import Header from "../components/Header";
import Language from "../components/Language";

export default function Home() : JSX.Element {
    return (
        <Grid 
        container
        spacing={6}
            sx={{
                padding: "40px"
            }}>
            <Grid>
                <Header />
            </Grid>
            <Grid>
                <Box>
                <Tabs value="experience" aria-label="experience">
                    <Tab value="experience" label="Professional Experience" />
                    <Tab value="techSkills" label="Technical Skills" />
                    <Tab value="courses" label="Courses" />
                </Tabs>
            </Box>
            </Grid>
        </Grid>
    )
}