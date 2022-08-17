import * as React from 'react';
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
  const [value, setValue] = React.useState<Date | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      senha: data.get('senha'),
    });
  };

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
                  fullWidth
                  id="nomeCompleto"
                  label="Nome Completo"
                  name="nomeCompleto"
                  autoComplete="nomeCompleto"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="given-name"
                  name="matricula"
                  required
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
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="cpf"
                  id="cpf"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="telefone"
                  id="telefone"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="nacionalidade"
                  label="Nacionalidade"
                  type="nacionalidade"
                  id="nacionalidade"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  fullWidth
                  name="rg"
                  label="RG"
                  type="rg"
                  id="rg"
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  required
                  fullWidth
                  name="uf_rg"
                  label="UF"
                  type="uf_rg"
                  id="uf_rg"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  fullWidth
                  name="orgao_emissor"
                  label="Órgao Emissor"
                  type="orgao_emissor"
                  id="orgao_emissor"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  fullWidth
                  name="crm"
                  label="CRM"
                  type="crm"
                  id="crm"
                 
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  required
                  fullWidth
                  name="uf_crm"
                  label="UF"
                  type="uf_crm"
                  id="uf_crm"
                 
                />
              </Grid>
              <Grid item xs={2.5}> 
                <TextField
                  required
                  fullWidth
                  name="genero"
                  label="Gênero"
                  type="genero"
                  id="genero"
                 
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  name="especializacao"
                  label="Especialização"
                  type="especializacao"
                  id="especializacao"
                />
              </Grid>
              <Grid item xs={4.5}>
                <TextField
                  required
                  fullWidth
                  name="formacao_academica"
                  label="Formação acadêmica"
                  type="formacao_academica"
                  id="formacao_academica"
                />
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
              href="http://localhost:3000/docente/portal"
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

/* 
nome completo
matrciula
data de nascimento
cpf
rg
emissora_rg
uf_rg
ddd+telefone
crm
uf_crm
sexo
especializacao
email
*/