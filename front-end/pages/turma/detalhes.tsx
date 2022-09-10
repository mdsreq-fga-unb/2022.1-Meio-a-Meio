import { Box, Tab}from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState, SyntheticEvent } from "react";

export default function MuiTabs  ()  {
  const[value, setValue] = useState('1')
  const handleChange = (event: SyntheticEvent, newValue: string) =>{
    setValue(newValue)

  }
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList aria-label='Tabs example' onChange={handleChange} centered>
            <Tab label ='Alunos' value='1'/>
            <Tab label ='Presença' value='2'/>
            <Tab label ='Diário' value='3'/>
            <Tab label ='Atividades' value='4'/>
          </TabList>
        </Box>
        <TabPanel value='1'>Alunos Cadastrados na Turma</TabPanel>
        <TabPanel value='2'>Panel Two</TabPanel>
        <TabPanel value='3'>Panel Three</TabPanel>
        <TabPanel value='4'>Panel Four</TabPanel>
      </TabContext>
    </Box>

  );
}