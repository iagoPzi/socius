import { AuthContext } from "@/context/authContext";
import { api } from "@/services/api";
import { queryClient } from "@/services/queryClient";
import { CircleNotch, Trash } from "@phosphor-icons/react";
import axios from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";

interface DeletePostProps {
  postId: number;
}

export function DeletePost({ postId }: DeletePostProps) {
  const { token } = useContext(AuthContext);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const res = await api.delete(`/publicacoes/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["feed"]);
    },
  });

  return (
    <>
      <button onClick={() => mutate()} className="flex items-center mt-3">
        Apagar postagem
        {isLoading ? (
          <CircleNotch weight="bold" className="animate-spin" />
        ) : (
          <Trash weight="fill" />
        )}
      </button>
    </>
  );
}
