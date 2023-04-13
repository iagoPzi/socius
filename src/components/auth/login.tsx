import axios from "axios";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastErr } from "../shared/ToastErr";
import { AuthContext } from "@/context/authContext";

export function Login() {
  const { Login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = {
    email,
    senha: password,
  };

  function onCloseToast() {
    setError("");
  }

  async function SubmitLogin(e: FormEvent) {
    e.preventDefault();
    const result = await Login(user);
    if (!result.success) {
      setError("Email e Senha não condizem");
    }
  }

  return (
    <>
      <form onSubmit={SubmitLogin} className="flex flex-col gap-2">
        <input
          className="input"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input"
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="button">Entrar</button>
      </form>
      {error && <ToastErr message={error} onClose={onCloseToast} />}
    </>
  );
}
