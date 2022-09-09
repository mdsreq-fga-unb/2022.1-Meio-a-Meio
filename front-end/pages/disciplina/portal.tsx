import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from '../../component/layout'
import apiRequest from "../../util/apiRequest";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent, useEffect } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PortalDaDisciplina({listaDisciplinas: listaDisciplinas, error}) {
  const [disciplina, setDisciplina] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    if (listaDisciplinas) {
      setDisciplina(listaDisciplinas);
    }
    console.log(listaDisciplinas);
    console.log(error);
    //erros
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Galdi</title>
        <meta name="description" content="Generated by meio a meio" />
      </Head>
      <Layout>
      <main className={styles.main}>
      <p className={styles.description}>Disciplinas</p>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
          <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Opções</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {disciplina.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.nome_disciplina}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        aria-label="edit"
                        component="label"
                        onClick={() => router.push({pathname: "/disciplina/editar", query: {...row}})}
                      >
                        <ModeEditIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="delete"
                        component="label"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              variant="outlined"
              onClick={() => router.push("/disciplina/cadastro")}
              sx={{ alignSelf: "center" }}
            >
              Cadastrar
            </Button>
        </div>
      </main>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const resDisciplinas = await apiRequest.get("disciplina");
  if (!resDisciplinas || !resDisciplinas.data) {
    return { props: { error: "Falha ao carregar conteúdo" } };
  }

  return {
    props: {
      listaDisciplinas: resDisciplinas.data,
      error: null,
    },
  };
}