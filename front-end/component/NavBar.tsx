import React, { Component, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GroupsIcon from "@mui/icons-material/Groups";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Public from "@mui/icons-material/Public";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import NextLink from "next/link";
import { Selector as SelectorIcon } from "./selector";
import { NavItem } from "./nav-item";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import GroupIcon from "@mui/icons-material/Group";
import CabinIcon from "@mui/icons-material/Cabin";
import AppBar from "@mui/material/AppBar";
import { IconContext } from "react-icons";
import styles from '../styles/Home.module.css'

const data = [
  {
    href: "/docente/portal",
    icon: <CabinIcon fontSize="small" />,
    title: "Início",
  },
  {
    href: "/aluno/portal",
    icon: <GroupIcon fontSize="small" />,
    title: "Alunos",
  },
  {
    href: "/professor/portal",
    icon: <GroupsIcon fontSize="small" />,
    title: "Professores",
  },
  {
    href: "/curso/portal",
    icon: <ImportContactsIcon fontSize="small" />,
    title: "Cursos",
  },
  {
    href: "/turma/portal",
    icon: <Public fontSize="small" />,
    title: "Turmas",
  },
  {
    href: "/disciplina/portal",
    icon: <FeedOutlinedIcon fontSize="small" />,
    title: "Disciplinas",
  },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function NavBar(props) {
  const router = useRouter();
  const { ...other } = props;
  const [open, setOpen] = React.useState(true);
  const { close, onClose } = props;
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (close) {
        onClose?.();
      }
    },
    [router.asPath]
  );
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "light",
          primary: { main: "rgb(0, 0, 0)" },
          background: { paper: "rgb(245, 235, 235)" },
        },
      })}
    >
      <Paper>
        <Box>
          <FireNav component="nav" disablePadding>
            <Drawer variant="permanent" {...other}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: 250,
                }}
              >
                <div>
                  <Box sx={{ p: 4.5, display: "flex" }}>
                    <ListItemIcon sx={{ fontSize: 25 }}>⚕️</ListItemIcon>
                    <ListItemText
                      primary="Galdi"
                      primaryTypographyProps={{
                        fontSize: 25,
                        fontWeight: "medium",
                        letterSpacing: 0.3,
                      }}
                    />
                  </Box>
                  <Box sx={{ px: 2 }}>
                    <Box
                      sx={{
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        px: 3,
                        py: "11px",
                        borderRadius: 1,
                      }}
                    >
                      <div>
                        <Typography
                          color="inherit"
                          variant="subtitle1"
                          align="center"
                        >
                          2022/2
                        </Typography>
                      </div>
                      <SelectorIcon
                        sx={{
                          color: "neutral.500",
                          width: 14,
                          height: 14,
                        }}
                      />
                    </Box>
                  </Box>
                </div>
                <Divider
                  sx={{
                    borderColor: "#2D3748",
                    my: 3,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  {open &&
                    data.map((item) => (
                      <NavItem
                        key={item.title}
                        icon={item.icon}
                        href={item.href}
                        title={item.title}
                      />
                    ))}
                </Box>
                <NextLink href="/" passHref>
                  <Button
                    color="primary"
                    component="a"
                    endIcon={<LogoutOutlinedIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                    variant="contained"
                  >
                    Sair
                  </Button>
                </NextLink>
              </Box>
            </Drawer>
          </FireNav>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
