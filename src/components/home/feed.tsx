import { AuthContext } from "@/context/authContext";
import { CircleNotch } from "@phosphor-icons/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ToastErr } from "../shared/ToastErr";
import { Post } from "./post";

export interface PostProps {
  autorId: number;
  autorNick: string;
  conteudo: string;
  criadaEm: string;
  curtidas: number;
  id: number;
  titulo: string;
}
export function Feed() {
  const { token } = useContext(AuthContext);

  const {
    data: posts,
    isFetching,
    error,
  } = useQuery<PostProps[]>(
    "feed",
    async () => {
      const res = await axios.get("http://localhost:5000/publicacoes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 1000 * 60 * 60, //1 hora
    }
  );

  return (
    <>
      <div className="px-2 py-10 innerContainer">
        <div className="flex flex-col items-center justify-center gap-3 ">
          {isFetching ? (
            <CircleNotch weight="bold" className="animate-spin" />
          ) : (
            <span>Feed</span>
          )}
          {posts?.map((post) => {
            return (
              <Post
                key={post.id}
                autorId={post.autorId}
                autorNick={post.autorNick}
                conteudo={post.conteudo}
                criadaEm={post.criadaEm}
                curtidas={post.curtidas}
                id={post.id}
                titulo={post.titulo}
              />
            );
          })}
        </div>
      </div>
      {error}
    </>
  );
}
