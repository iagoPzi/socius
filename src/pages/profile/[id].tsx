import { Header } from "@/components/shared/header";
import { Profile } from "@/components/profile/profile";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "react-query";

export interface userProps {
  id?: number;
  nome?: string;
  nick?: string;
  email?: string;
  createdAt?: string | number | Date;
}
export default function ProfilePage() {
  const { token, id: userid } = useContext(AuthContext);

  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<userProps>();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(`http://localhost:5000/usuarios/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [id]);

  return (
    <>
      <Head>
        <title>{user ? `Perfil ${user.nome}` : "Perfil"}</title>
      </Head>
      <Header />
      {!user ? (
        <span className="text-center">carregado</span>
      ) : (
        <Profile
          id={user.id}
          nome={user?.nome}
          nick={user?.nick}
          email={user?.email}
          createdAt={user?.createdAt}
        />
      )}
    </>
  );
}
