import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from "../../component/layout";
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
import { apiRequest } from "../../util/apiRequest";

export default function TelaProfessores() {
  const [professor, setProfessor] = useState<any>([]);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  async function getProfessor() {
    const resProfessores = await apiRequest.get("professor");
    if (resProfessores.data) {
      setProfessor(resProfessores.data);
    } 
  }
  useEffect(() => {
    getProfessor();
  }, []);
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Galdi</title>
        <meta name="description" content="Generated by meio a meio" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <p className={styles.description}>Professores</p>
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
                  <TableCell align="center">Matricula</TableCell>
                  <TableCell align="center">Especialização</TableCell>
                  <TableCell align="center">Editar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {professor.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.nome_completo}</TableCell>
                    <TableCell align="center">{row.matricula || ""}</TableCell>
                    <TableCell align="center">
                      {row.especializacao || ""}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        aria-label="edit"
                        component="label"
                        onClick={() =>
                          router.push({
                            pathname: "/professor/editar",
                            query: { ...row },
                          })
                        }
                      >
                        <ModeEditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              variant="outlined"
              onClick={() => router.push("/professor/cadastro")}
              sx={{ alignSelf: "center" }}
            >
              Cadastrar
            </Button>
          </div>
        </main>
      </Layout>
    </div>
  );
}