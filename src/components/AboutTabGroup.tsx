import { Box, Tabs, Tab } from '@mui/material';
import React, { JSX } from 'react';
import Filter from './Filter';
import { SkillCategory } from '../models/Skill';
import {
  g_professionalExperiences,
  g_technicalSkills,
} from '../models/ConstantData';
import SkillChipsList from './SkillChipsList';
import ProfessionalExperienceEntryList from './ProfessionalExperienceEntryList';

export default function AboutTabGroup(): JSX.Element {
  const experienceTabID = 'experience';
  const technicalSkillsTabID = 'techSkills';
  // const coursesTabID = 'courses';

  const [selectedTab, setSelectedTab] = React.useState(technicalSkillsTabID);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ height: '300px', width: '600px' }}>
      <Tabs
        TabIndicatorProps={{ style: { backgroundColor: '#CCCCCC' } }}
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="about section tab group"
        sx={{
          marginBottom: '10px',
        }}
      >
        <Tab
          sx={{ '&.Mui-selected': { color: '#4A4747' } }}
          value={technicalSkillsTabID}
          label="Technical Skills"
        />
        <Tab
          sx={{ '&.Mui-selected': { color: '#4A4747' } }}
          value={experienceTabID}
          label="Professional Experience"
        />
        {/* <Tab value={coursesTabID} label="Courses" /> */}
      </Tabs>
      {selectedTab === experienceTabID ? (
        <ProfessionalExperienceEntryList
          professionalExperiences={g_professionalExperiences}
        />
      ) : (
        <SkillChipsList skills={g_technicalSkills} />
      )}
    </Box>
  );
}
