import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/mdsreq-fga-unb/2022.1-Meio-a-Meio"
      >
        Meio a Meio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function CadastroNotas() {
  const [data, setData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleCheckData()) {
      return;
    }
    router.push("/turma/listar");
  };
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const clearText = e.target.value.replace(/\d/, "");
    setData({ ...data, [e.target.name]: clearText });
    let tempErrors = errors;
    delete tempErrors[e.target.name];
    setErrors(tempErrors);
  };

  const handleCheckData = () => {
    const { nome_curso, nome_disciplina, nome_turma, nome_aluno, nota } = data;
    let emptyFields: any = {};

    if (!nome_curso || nome_curso.length === 0) {
      emptyFields.nome_curso = "Nome Inválido";
    }
    if (!nome_disciplina || nome_disciplina.length === 0) {
      emptyFields.nome_disciplina = "Disciplina Inválida";
    }
    if (!nome_aluno || nome_aluno.length === 0) {
      emptyFields.nome_aluno = "Aluno Inválido";
    }
    if (!nota || nota.length === 0) {
      emptyFields.nota = "Nota Inválida";
    }
    if (Object.keys(emptyFields).length > 0) {
      setErrors(emptyFields);
      return 1;
    }
    return 0;
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            Cadastro de Notas de Avaliações
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  error={errors.nome_curso ? true : false}
                  helperText={errors.nome_curso || null}
                  fullWidth
                  id="nome_curso"
                  label="Nome do Curso"
                  name="nome_curso"
                  autoComplete="nome_curso"
                  onChange={handleText}
                  value={data ? data.nome_curso : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  error={errors.nome_disciplina ? true : false}
                  helperText={errors.nome_disciplina || null}
                  fullWidth
                  id="nome_disciplina"
                  label="Nome da Disciplina"
                  name="nome_disciplina"
                  autoComplete="nome_disciplina"
                  onChange={handleText}
                  value={data ? data.nome_disciplina : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  error={errors.nome_aluno ? true : false}
                  helperText={errors.nome_aluno || null}
                  fullWidth
                  id="nomeAluno"
                  label="Nome do Aluno"
                  name="nomeAluno"
                  autoComplete="nomeAluno"
                  onChange={handleText}
                  value={data ? data.nomeAluno : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  error={errors.nota ? true : false}
                  helperText={errors.nota || null}
                  fullWidth
                  id="nota"
                  label="Nota"
                  name="nota"
                  autoComplete="nota"
                  onChange={handleText}
                  value={data ? data.nota : ""}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar Nota de Avaliação
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/docente/portal" variant="body2">
                    Retornar ao Menu Principal
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
