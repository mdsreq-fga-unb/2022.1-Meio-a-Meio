import React,{useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import apiRequest from '../../../util/apiRequest';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mantine/dates';
import styles from '../../../styles/listapresenca.module.css'
import Button from '@mui/material/Button';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface CadastroProps{
  listaAluno?:[any];
  error?:any
}

export default function Cadastro({listaAluno,error}:CadastroProps) {
  const[alunos,setAlunos]=useState([])
  const[alunosPresentes,setAlunosPresentes]=useState([])
  useEffect(()=>{
    if (listaAluno){
      setAlunos(listaAluno)
    }
  },[])
  
const handleCheck=(id)=>{
  const jaExiste=alunosPresentes.find(i=>i===id)
  console.log(jaExiste)
  if(jaExiste){
    const listaFiltrada= alunosPresentes.filter(i=>i!==id)
    setAlunosPresentes(listaFiltrada)
    return;
  }
  setAlunosPresentes([...alunosPresentes,id])
}
  console.log(listaAluno);
  return (
  <div>
    <div className={styles.datepickerContainer}>

      <DatePicker placeholder="Escolha uma data" label="Dia da aula" withAsterisk />
      </div>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Presente</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome_completo}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">
                <Checkbox onClick={()=>handleCheck(row.id)} checked={alunosPresentes.find(i=>i===row.id)?true:false} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={styles.buttonContainer}>
      <Button variant="outlined">
        Lançar lista de presença
      </Button>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const resAluno = await apiRequest.get('aluno') //lista de Alunos
  if(!resAluno || !resAluno.data){
    return {props: {error: 'Falha ao carregar conteúdo'}}
  }

  return {
    props: {
      listaAluno: resAluno.data,
      error: null,
    },
  };
  }