import axios from "axios";
import router from "next/router";
import { createContext, PropsWithChildren, ReactNode, useState } from "react";

interface AuthContextProps {
  token: string | false | null;
  id: string | false | null;
  Logout: () => void;
  Login: (user: { email: string; senha: string }) => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthContextProvider({ children }: PropsWithChildren<{}>) {
  const token =
    typeof localStorage !== "undefined" && localStorage.getItem("token");
  const id = typeof localStorage !== "undefined" && localStorage.getItem("id");

  function Logout() {
    localStorage.removeItem("token");
  }

  async function Login(user: { email: string; senha: string }) {
    return await axios
      .post("http://localhost:5000/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        router.push("/");
        return { success: true, data: res.data };
      })
      .catch((err) => {
        console.log(err.response.data.erro);
        return { success: false, error: err };
      });
  }

  const authContextValue: AuthContextProps = {
    id,
    token,
    Logout,
    Login,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
