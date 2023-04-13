import { AuthContext } from "@/context/authContext";
import { userProps } from "@/pages/profile/[id]";
import axios from "axios";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import * as Dialog from "@radix-ui/react-dialog";
import { ProfileModal } from "./modal";

export function Profile(props: userProps) {
  const { token, id } = useContext(AuthContext);

  const [followers, setFollowers] = useState<userProps[] | null>([]);

  async function Seguir() {
    await axios
      .post(
        `http://localhost:5000/usuarios/${props.id}/seguir`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((err) => console.log(err, token));
  }

  var date = new Date(props.createdAt);

  const { data } = useQuery(
    "followers",
    async () => {
      setFollowers(null);
      const res = await axios.get(
        `http://localhost:5000/usuarios/${props.id}/seguidores`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    },

    {
      onSuccess: () => {
        setFollowers(data);
      },
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="pt-5">
      <div className="grid text-center innerContainer place-items-center">
        <div className="flex items-end gap-5">
          <h2 className="text-lg font-bold">{props.nome}</h2>
          <span>#{props.nick}</span>
        </div>
        <div className="flex flex-col">
          <span>{props.email}</span>
          <span>{`Desde de ${date.toLocaleDateString()}`}</span>
        </div>
        <div className="flex gap-2">
          {followers && <span>Seguidores {followers?.length}</span>}
        </div>
        {!(id == props.id) ? (
          <button onClick={Seguir}>Seguir</button>
        ) : (
          <>
            <Dialog.Root>
              <Dialog.Trigger>Alterar perfil</Dialog.Trigger>
              <ProfileModal
                id={props.id}
                nome={props.nome}
                nick={props.nick}
                email={props.email}
              />
            </Dialog.Root>
          </>
        )}
      </div>
    </div>
  );
}
