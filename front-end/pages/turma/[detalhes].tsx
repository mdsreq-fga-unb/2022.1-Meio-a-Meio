import { Box, Tab}from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState, SyntheticEvent, useEffect } from "react";
import PortalDoAlunoNaTurma from "./aluno/listar";
import { useRouter } from "next/router";
import PortalDoDiarioTurma from "./diario/listar";
import PortalDaPresencaTurma from "./listaPresenca/listar";
import PortalDaAtividadeTurma from "./atividade/listar";
export default function MuiTabs  ()  {
  const[value, setValue] = useState('1')
  const [aluno, setAluno] = useState<any>([]);
  const [turma, setTurma] = useState<any>([]);
  const router = useRouter();
  
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
        <TabPanel value='1'> <PortalDoAlunoNaTurma/> </TabPanel>
        <TabPanel value='2'> <PortalDaPresencaTurma/> </TabPanel>
        <TabPanel value='3'> <PortalDoDiarioTurma/> </TabPanel>
        <TabPanel value='4'><PortalDaAtividadeTurma/></TabPanel>
      </TabContext>
    </Box>
  );
}

