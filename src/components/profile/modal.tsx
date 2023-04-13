import { X } from "@phosphor-icons/react";
import { Modalbase } from "../shared/modalBase";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "react-query";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { queryClient } from "@/services/queryClient";
import { userProps } from "@/pages/profile/[id]";

export function ProfileModal(props: userProps) {
  const { token, id } = useContext(AuthContext);

  const [nome, setNome] = useState(props.nome);
  const [nick, setNick] = useState(props.nick);
  const [email, setEmail] = useState(props.email);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      await axios
        .put(
          `http://localhost:5000/usuarios/${props.id}`,
          {
            nome,
            nick,
            email,
          },

          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => console.log(res.data));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["feed"]);
    },
  });

  return (
    <Modalbase>
      <Dialog.Title className="my-3 text-center">Alterar perfil</Dialog.Title>
      <form className="flex flex-col gap-3">
        <label htmlFor="nome">
          Novo nome
          <input
            id="nome"
            className="block input"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </label>
        <label htmlFor="nick">
          Novo nick
          <input
            id="nick"
            className="input"
            value={nick}
            onChange={(e) => {
              setNick(e.target.value);
            }}
          />
        </label>
        <label htmlFor="email">
          Novo email
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
      </form>
      <Dialog.Close
        className="w-full mt-3 button"
        onClick={() => {
          mutate();
        }}
      >
        Editar
      </Dialog.Close>
      <Dialog.Close className="absolute right-3 top-3">
        <X weight="bold" />
      </Dialog.Close>
    </Modalbase>
  );
}
