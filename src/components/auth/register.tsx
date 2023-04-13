import axios from "axios";
import { FormEvent, useState } from "react";

export function Register() {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user = {
    nome: name,
    nick,
    email,
    senha: password,
  };

  async function HandleRegister(e: FormEvent) {
    e.preventDefault();
    password !== confirmPassword
      ? alert("senhas não coincidem")
      : await axios.post("http://localhost:5000/usuarios", user);
  }

  return (
    <form onSubmit={HandleRegister} className="flex flex-col gap-2">
      <input
        className="input"
        required
        placeholder="Nome"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="input"
        required
        placeholder="Nick"
        value={nick}
        onChange={(e) => {
          setNick(e.target.value);
        }}
      />
      <input
        className="input"
        required
        type="email"
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
      <input
        className="input"
        required
        type="password"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <button className="button">Registrar</button>
    </form>
  );
}
