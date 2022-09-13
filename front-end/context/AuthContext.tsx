import { createContext, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { useEffect } from "react";
import { apiRequest } from "../util/apiRequest";
import { getAPIClient, parseJwt } from "../util/axios";
type User = {
  nome_completo: string;
  matricula: string;
  celular: string;
  cpf: string;
  data_de_nascimento: string;
  rg_rne: string;
  email: string;
};

type SignInData = {
  username: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  setUser: Function;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;
  const router = useRouter();

  async function getToken() {
    const user = parseJwt(localStorage.getItem("token"));
    const apiClient = getAPIClient();
    const resDadosAdm = await apiClient.get("administrador/" + user.sub);
    setUser(resDadosAdm.data);
  }
  const PAGES_WITHOUT_AUTH = ['/', '/administrador/cadastro']
  useEffect(() => {
    if (PAGES_WITHOUT_AUTH.includes(router.pathname)) return;
    if (!user) {
      router.push("/");
    } else {
      getToken();
    }
  }, [router.pathname]);

  async function signIn({ username, password }: SignInData) {
    const { token, user } = await signInRequest({
      username,
      password,
    });
    setUser({username: user.username, password: user.password});
    if (token) {
      localStorage.setItem("token", token);
    }
    apiRequest.defaults.headers["Authorization"] = `Bearer ${token}`;

    router.push("/docente/portal");
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
