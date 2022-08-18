import React, {useState, ChangeEvent} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import Head from 'next/head';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import apiRequest from '../../util/apiRequest';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/mdsreq-fga-unb/2022.1-Meio-a-Meio">
        Meio a Meio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function Cadastro() {
  const [value, setValue] = useState<Date | null>(null);
  const [gender, setGender] = useState('');
  const [data, setData] = useState<any>({});
  const [errors , setErrors] = useState<any>({});

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if(handleCheckData()){
    //   return;
    // }
    apiRequest.post('professor/create',{
      "nome_completo": "Bruna",
      "data_de_nascimento": "2000/01/01",
      "nacionalidade": "brasileira",
      "email": "lbruna886@gmail.com",
      "cpf": "42531285059",
      "rg_rne": 1232434,
      "uf_rg_rne": "df",
      "orgao_emissor": "ssp",
      "ddd": "61",
      "celular": "983740763",
      "crm":"332024",
      "uf_crm":"GO",
      "formacao_academica": "med",
      "especializacao":"bla",
      "especialista": true,
      "sexo":"fem"
  }).then((result) => {
    console.log('ok')
    
  }).catch((err) => {
    console.log('errado')
  });

    const date = new FormData(event.currentTarget);
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const clearText = e.target.value.replace(/\d/,"");
    setData({...data,[e.target.name]: clearText});
    let tempErrors = errors
    delete tempErrors[e.target.name]
    setErrors(tempErrors);
  };
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const clearNumber = e.target.value.replace(/\D/,"");
    setData({...data,[e.target.name]: clearNumber});
  };

  const handleCheckData = () => {
    const {
      nomeCompleto ,
      matricula,
      cpf,
      telefone,
      nacionalidade,
      rg,
      uf_rg,
      orgao_emissor,
      crm,
      uf_crm,
      especializacao,
      formacao_academica,
 
    } = data;
    let emptyFields: any = {}

    if(!nomeCompleto || nomeCompleto.length === 0) {
      emptyFields.nomeCompleto = "Nome Vazio"
    } 
    // if(!matricula || matricula.length === 0) {
    //   setErrors({...errors, matricula:"Matricula Vazia"})
    // }
    if(!cpf || cpf.length === 0) {
      emptyFields.cpf = "CPF Vazio"
    }
    if(!telefone || telefone.length === 0) {
      emptyFields.telefone = "Telefone Vazio"
    }
    if(!nacionalidade || nacionalidade.length === 0) {
      emptyFields.nacionalidade = "Nacionalidade Vazia"
    }
    if(!rg || rg.length === 0) {
      emptyFields.rg = "RG Vazio"
    }
    if(!uf_rg || uf_rg.length === 0) {
      emptyFields.uf_rg = "UF Vazio"
    }
    if(!orgao_emissor || orgao_emissor.length === 0) {
      emptyFields.orgao_emissor = "Orgao Emissor Vazio"
    }
    if(!crm || crm.length === 0) {
      emptyFields.crm = "CRM Vazio"
    }
    if(!uf_crm || uf_crm.length === 0) {
      emptyFields.uf_crm = "UF Vazio"
    }
    if(!especializacao || especializacao.length === 0) {
      emptyFields.especializacao = "Especialização Vazia"
    }
    if(!formacao_academica || formacao_academica.length === 0) {
      emptyFields.formacao_academica = "Formação Acadêmica Vazia"
    }
    if(Object.keys(emptyFields).length > 0){
      setErrors(emptyFields);
      return 1;
    }
    return 0;
  }  
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
          <Head> 
            <title>Galdi</title>
            <meta name="description" content="Generated by meio a meio" />
            <link rel="icon" href="/images/icon.png" />
          </Head>
          <Image src= "/images/logo.jpeg" width= '600px' height= '150px'/>
        </div>
          <Typography component="h1" variant="h5">
            Dados Cadastrais
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={4}>
                <TextField
                  required
                  error={errors.nomeCompleto?true:false}
                  helperText={errors.nomeCompleto||null}
                  fullWidth
                  id="nomeCompleto"
                  label="Nome Completo"
                  name="nomeCompleto"
                  autoComplete="nomeCompleto"
                  onChange={handleText}
                  value= {data?data.nomeCompleto:""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="given-name"
                  name="matricula"
                  fullWidth
                  id="matricula"
                  label="Matrícula"
                  autoFocus
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                  label="Data de Nascimento"
                  value={value}
                  onChange={(newValue) => {
                  setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  error={errors.cpf?true:false}
                  helperText={errors.cpf||null}
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="cpf"
                  id="cpf"
                  onChange={handleNumber}
                  value= {data?data.cpf:""}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  error={errors.telefone?true:false}
                  helperText={errors.telefone||null}
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="telefone"
                  id="telefone"
                  onChange={handleNumber}
                  value= {data?data.telefone:""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  error={errors.nacionalidade?true:false}
                  helperText={errors.nacionalidade||null}
                  fullWidth
                  name="nacionalidade"
                  label="Nacionalidade"
                  type="nacionalidade"
                  id="nacionalidade"
                  onChange={handleText}
                  value= {data?data.nacionalidade:""}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  error={errors.rg?true:false}
                  helperText={errors.rg||null}
                  fullWidth
                  name="rg"
                  label="RG"
                  type="rg"
                  id="rg"
                  onChange={handleNumber}
                  value= {data?data.rg:""}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  required
                  error={errors.uf_rg?true:false}
                  helperText={errors.uf_rg||null}
                  fullWidth
                  name="uf_rg"
                  label="UF"
                  type="uf_rg"
                  id="uf_rg"
                  onChange={handleText}
                  value= {data?data.uf_rg:""}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  error={errors.orgao_emissor?true:false}
                  helperText={errors.orgao_emissor||null}
                  fullWidth
                  name="orgao_emissor"
                  label="Órgao Emissor"
                  type="orgao_emissor"
                  id="orgao_emissor"
                  onChange={handleText}
                  value= {data?data.orgao_emissor:""}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  error={errors.crm?true:false}
                  helperText={errors.crm||null}
                  fullWidth
                  name="crm"
                  label="CRM"
                  type="crm"
                  id="crm"
                  onChange={handleNumber}
                  value= {data?data.crm:""}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  required
                  error={errors.uf_crm?true:false}
                  helperText={errors.uf_crm||null}
                  fullWidth
                  name="uf_crm"
                  label="UF"
                  type="uf_crm"
                  id="uf_crm"
                 
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  error={errors.especializacao?true:false}
                  helperText={errors.especializacao||null}
                  fullWidth
                  name="especializacao"
                  label="Especialização"
                  type="especializacao"
                  id="especializacao"
                  onChange={handleText}
                  value= {data?data.especializacao:""}
                />
              </Grid>
              <Grid item xs={1.8}> 
                <FormControl fullWidth>
                <InputLabel id="especialista" required>Especialista?</InputLabel>
                  <Select
                    labelId="especialista"
                    id="especialista"
                    label="Especialista"
                    value={gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Sim</MenuItem>
                    <MenuItem value={20}>Não</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2.7}>
                <TextField
                  required
                  error={errors.formacao_academica?true:false}
                  helperText={errors.formacao_academica||null}
                  fullWidth
                  name="formacao_academica"
                  label="Formação acadêmica"
                  type="formacao_academica"
                  id="formacao_academica"
                  onChange={handleText}
                  value= {data?data.formacao_academica:""}
                />
              </Grid>
              <Grid item xs={2.5}> 
                <FormControl fullWidth>
                <InputLabel id="sexo" required>Sexo</InputLabel>
                  <Select
                    labelId="sexo"
                    id="sexo"
                    label="Selecione o Sexo"
                    value={gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Homem</MenuItem>
                    <MenuItem value={20}>Mulher</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="observacoes"
                  label="Observações"
                  type="observacoes"
                  id="observacoes"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar Professor
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/professor/login" variant="body2">
                  {"Já possui uma conta? Entrar"}
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="http://localhost:3000/" variant="body2">
                  {"Retornar ao Menu Principal"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
