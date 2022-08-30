import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from 'next/router'


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

const EsqueceuASenha: NextPage = () => {
  const [data, setData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const clearText = e.target.value.replace(/\d/, "");
    setData({ ...data, [e.target.name]: clearText });
    let tempErrors = errors;
    delete tempErrors[e.target.name];
    setErrors(tempErrors);
  };
  const handleCheckData = () => {
    const { matricula: email } = data;
    let emptyFields: any = {};

    if (!email || email.length === 0) {
      emptyFields.matricula = "O campo de matrícula não pode ser vazio";
    }
    if (Object.keys(emptyFields).length > 0) {
      setErrors(emptyFields);
      return 1;
    }
    return 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleCheckData()) {
      return;
    }
    router.push('/')
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          </div>
          <Typography component="h1" variant="h5">
            Preencha aqui o seu e-mail de cadastro para a recuperação de senha:
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              error={errors.email ? true : false}
              helperText={errors.email || null}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              onChange={handleText}
              value={data ? data.email : ""}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar e-mail
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Retornar a Tela de Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default EsqueceuASenha;
