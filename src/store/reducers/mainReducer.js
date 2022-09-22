/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data.json';

const {
  user, about, social, experience, education, honors, skills, projects, softSkills, tools,
} = JSON.parse(JSON.stringify(data));

const mainReducer = createSlice({
  name: 'main',
  initialState: {
    user,
    about,
    education,
    experience,
    tools,
    skills,
    softSkills,
    projects,
    social,
    honors,
  },
}).reducer;

export default mainReducer;
