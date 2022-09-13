import React, { useState, ChangeEvent, FunctionComponentElement } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Head from "next/head";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {apiRequest} from "../../util/apiRequest";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Moment from "moment";
import SelectUf from "../../component/SelectUf";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";


const theme = createTheme();

export default function Cadastro() {
  const [value, setValue] = useState<Date | null>(null);
  const [data, setData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<any>("");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);


  const handleDate = (e: SelectChangeEvent<HTMLInputElement>) => {
    const formatedData = Moment(e).format("yyyy/MM/DD");
    setData({ ...data, data_de_nascimento: formatedData });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleCheckData()) {
      setClose(true);
      return;
    }
    apiRequest
      .post("administrador", { ...data})
      .then((result) => {
        setOpen(true);
        router.push("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setClose(true);
      });

    const date = new FormData(event.currentTarget);
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const clearText = e.target.value.replace(/\d/, "");
    setData({ ...data, [e.target.name]: clearText });
    let tempErrors = errors;
    delete tempErrors[e.target.name];
    setErrors(tempErrors);
  };
  const handleSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    let tempErrors = errors;
    delete tempErrors[e.target.name];
    setErrors(tempErrors);
  };
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const clearNumber = e.target.value.replace(/\D/, "");
    setData({ ...data, [e.target.name]: clearNumber });
  };
  
  const handleCheckData = () => {
    const {
      nome_completo, 
      cpf, 
      celular,
      nacionalidade, 
      rg_rne, 
      uf_rg_rne,
      orgao_emissor,
      email, 
      data_de_nascimento, 
      sexo,
      password,
    } = data;
    let emptyFields: any = {};

    if (!nome_completo || nome_completo.length === 0) {
      emptyFields.nome_completo = "O campo de nome não pode ser vazio";
    }
    if (!cpf || cpf.length === 0 || cpf.length < 11) {
      emptyFields.cpf = "CPF inválido";
    }
    if (!celular || celular.length === 0 || celular.length < 11) {
      emptyFields.celular = "Celular inválido";
    }

    if (!nacionalidade || nacionalidade.length === 0) {
      emptyFields.nacionalidade = "O campo de nacionalidade não pode ser vazio";
    }
    if (!rg_rne || rg_rne.length === 0) {
      emptyFields.rg_rne = "O campo de RG não pode ser vazio";
    }
    if (!uf_rg_rne || uf_rg_rne === 0) {
      emptyFields.uf_rg_rne = "Preencha o UF";
    }
    if (!orgao_emissor || orgao_emissor.length === 0) {
      emptyFields.orgao_emissor = "O campo de órgao emissor não pode ser vazio";
    }
    if (!email || email.length === 0 || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      emptyFields.email = "E-mail inválido";
    }
    if (!data_de_nascimento || data_de_nascimento.length === 0) {
      emptyFields.data_de_nascimento =
        "O campo de data de nascimento não pode ser vazio";
    }
    if (!password || password.length === 0) {
      emptyFields.password =
        "O campo de senha não pode ser vazio";
    }
    if (!sexo || sexo.length === 0) {
      emptyFields.sexo = "Escolha um sexo";
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
            </Head>
          </div>
          <Typography component="h1" variant="h5">
            Dados Cadastrais
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  required
                  error={errors.nome_completo ? true : false}
                  helperText={errors.nome_completo || null}
                  fullWidth
                  id="nome_completo"
                  label="Nome Completo"
                  name="nome_completo"
                  autoComplete="nome_completo"
                  onChange={handleText}
                  value={data ? data.nome_completo : ""}
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
                    required
                    label="Data de Nascimento"
                    name="data_de_nascimento"
                    inputFormat="dd/MM/yyyy"
                    value={data ? data.data_de_nascimento : ""}
                    onChange={handleDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <FormHelperText error>
                  {errors.data_de_nascimento}
                </FormHelperText>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  inputProps={{
                    maxLength: 11,
                  }}
                  error={errors.cpf ? true : false}
                  helperText={errors.cpf || null}
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="cpf"
                  id="cpf"
                  onChange={handleNumber}
                  value={data ? data.cpf : ""}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  inputProps={{
                    maxLength: 11,
                  }}
                  error={errors.celular ? true : false}
                  helperText={errors.celular || null}
                  fullWidth
                  name="celular"
                  label="Celular"
                  type="celular"
                  id="celular"
                  onChange={handleNumber}
                  value={data ? data.celular : ""}
                />
              </Grid>
              <Grid item xs={2.5}>
                <TextField
                  required
                  error={errors.nacionalidade ? true : false}
                  helperText={errors.nacionalidade || null}
                  fullWidth
                  name="nacionalidade"
                  label="Nacionalidade"
                  type="nacionalidade"
                  id="nacionalidade"
                  onChange={handleText}
                  value={data ? data.nacionalidade : ""}
                />
              </Grid>
              <Grid item xs={1.5}>
                <TextField
                  required
                  inputProps={{
                    maxLength: 7,
                  }}
                  error={errors.rg_rne ? true : false}
                  helperText={errors.rg_rne || null}
                  fullWidth
                  name="rg_rne"
                  label="RG/RNE"
                  type="rg_rne"
                  id="rg_rne"
                  onChange={handleNumber}
                  value={data ? data.rg_rne : ""}
                />
              </Grid>
              <Grid item xs={1}>
                <FormControl fullWidth>
                  <InputLabel id="uf_rg_rne" required>
                    UF
                  </InputLabel>
                  <SelectUf
                    name={"uf_rg_rne"}
                    setValue={(i) => setData({ ...data, uf_rg_rne: i })}
                  />
                  <FormHelperText error>{errors.uf_rg_rne}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  error={errors.orgao_emissor ? true : false}
                  helperText={errors.orgao_emissor || null}
                  fullWidth
                  name="orgao_emissor"
                  label="Órgao Emissor"
                  type="orgao_emissor"
                  id="orgao_emissor"
                  onChange={handleText}
                  value={data ? data.orgao_emissor : ""}
                />
              </Grid>
              <Grid item xs={2.5}>
                <FormControl fullWidth>
                  <FormLabel id="sexo" required>
                    Sexo
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => setData({ ...data, sexo: e.target.value })}
                    value={data ? data.sexo : null}
                  >
                    <FormControlLabel
                      value="homem"
                      control={<Radio />}
                      label="Homem"
                    />
                    <FormControlLabel
                      value="mulher"
                      control={<Radio />}
                      label="Mulher"
                    />
                  </RadioGroup>
                  <FormHelperText error>{errors.sexo}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  error={errors.email ? true : false}
                  helperText={errors.email || null}
                  fullWidth
                  name="email"
                  label="E-mail"
                  type="email"
                  id="email"
                  onChange={handleText}
                  value={data ? data.email : ""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  error={errors.password ? true : false}
                  helperText={errors.password || null}
                  fullWidth
                  name="password"
                  label="Senha"
                  id="password"
                  onChange={handleSenha}
                  value={data ? data.password : ""}
                />
              </Grid>
              <Grid item xs={6}>
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
              Cadastrar Administrador
            </Button>
            <Collapse in={open}>
              <Alert
              severity="success"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Cadastro realizado com sucesso!
              </Alert>
            </Collapse>
            <Collapse in={close}>
              <Alert
              severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setClose(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
                >
                  {errorMessage}
              </Alert>
            </Collapse>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Retornar a Tela de Login
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="center"></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
