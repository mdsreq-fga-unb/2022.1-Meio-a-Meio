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
  const [data, setData] = useState<any>({});
  const [errors , setErrors] = useState<any>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(handleCheckData()){
      return;
    }
  };
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const clearText = e.target.value.replace(/\d/,"");
    setData({...data,[e.target.name]: clearText});
    let tempErrors = errors
    delete tempErrors[e.target.name]
    setErrors(tempErrors);
  };

  const handleCheckData = () => {
    const {
      nomeDisciplina ,
      carga_horaria,
      nota,
      professor,
    } = data;
    let emptyFields: any = {}

    if(!nomeDisciplina || nomeDisciplina.length === 0) {
      emptyFields.nomeDisciplina = "Nome Vazio"
    } 
    if(!carga_horaria || carga_horaria.length === 0) {
      emptyFields.carga_horaria = "Carga Horaria Vazia"
    }
    if(!nota || nota.length === 0) {
      emptyFields.nota = "Nota Vazia"
    }
    if(!professor || professor.length === 0) {
      emptyFields.professor = "Professor Vazio"
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
            Insira os dados cadastrais da disciplina
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  required
                  error={errors.nomeDisciplina?true:false}
                  helperText={errors.nomeDisciplina||null}
                  fullWidth
                  id="nomeDisciplina"
                  label="Nome da Disciplina"
                  name="nomeDisciplina"
                  autoComplete="nomeDisciplina"
                  onChange={handleText}
                  value= {data?data.nomeDisciplina:""}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  error={errors.carga_horaria?true:false}
                  helperText={errors.carga_horaria||null}
                  fullWidth
                  id="carga_horaria"
                  label="Carga Horária"
                  name="carga_horaria"
                  onChange={handleText}
                  value= {data?data.carga_horaria:""}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  error={errors.nota?true:false}
                  helperText={errors.nota||null}
                  fullWidth
                  id="nota"
                  label="Nota"
                  name="nota"
                  onChange={handleText}
                  value= {data?data.nota:""}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  error={errors.professor?true:false}
                  helperText={errors.professor||null}
                  fullWidth
                  id="professor"
                  label="Professor"
                  name="professor"
                  onChange={handleText}
                  value= {data?data.professor:""}
                />
              </Grid>

              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar Disciplina
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid item xs>
                <Link href="http://localhost:3000/" variant="body2">
                  Retornar ao Menu Principal
                </Link>
              </Grid>
              {/* <Grid item>
              <Link href="http://localhost:3000/docente/portal" variant="body2">
                  {"Retornar ao Portal do Docente"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}