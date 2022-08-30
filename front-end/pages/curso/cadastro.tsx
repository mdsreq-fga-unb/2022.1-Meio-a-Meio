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
import { useRouter } from 'next/router'
import apiRequest from "../../util/apiRequest";

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
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("aaaa");
    if(handleCheckData()){
      console.log("bbbb");
      return;
    }
    apiRequest
      .post("curso/create", { ...data})
      .then((result) => {
        router.push('/curso/listar')
        console.log("ok");
      })
      .catch((err) => {
        console.log("errado", err);
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

  const handleCheckData = () => {
    const {
        nome ,
    } = data;
    let emptyFields: any = {}

    if(!nome || nome.length === 0) {
      emptyFields.nome = "Nome Vazio"
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
          {/* <Image src= "/images/logo.jpeg" width= '600px' height= '150px'/> */}
        </div>
          <Typography component="h1" variant="h5">
            Insira os dados cadastrais do curso
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  required
                  error={errors.nome?true:false}
                  helperText={errors.nome||null}
                  fullWidth
                  id="nome"
                  label="Nome do Curso"
                  name="nome"
                  autoComplete="nome"
                  onChange={handleText}
                  value= {data?data.nome:""}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  fullWidth
                  id="unidade"
                  label="Unidade"
                  name="unidade"
                />
              </Grid>

              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar Curso
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/docente/portal" variant="body2">
                Retornar ao Menu Principal
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