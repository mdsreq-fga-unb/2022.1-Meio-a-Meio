import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Grid from "@mui/material/Grid";


const PortalDaTurma: NextPage = () => {
    //acessa qualquer post que quiser no blog
    const router = useRouter()
    return (
      <div className={styles.container}>
        <Head>
          <title>Galdi</title>
          <meta name="description" content="Generated by meio a meio" />
          <link rel="icon" href="/images/icon.png" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Atividades
          </h1>

          <div className={styles.grid}>
            <Link href="/atividade/cadastroNotas">
            <a
              className={styles.card}
            >
              <h2>Cadastrar &rarr;</h2>
              <p>
              Cadastre novas atividades aqui
              </p>
            </a>
            </Link>
            <Link href="/atividade/visualizarNotas">
            <a
              className={styles.card}
            >
              <h2>Listar &rarr;</h2>
              <p>
                Veja suas atividades registradas aqui
              </p>
            </a>
            </Link>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid item>
                <Link href="/turma/portal" >
                  {"Retornar ao Portal da Turma"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://mdsreq-fga-unb.github.io/2022.1-Meio-a-Meio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright © Meio a Meio
          </a>
        </footer>
      </div>
    )
}

export default PortalDaTurma    
