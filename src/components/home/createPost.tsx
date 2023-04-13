import { AuthContext } from "@/context/authContext";
import { queryClient } from "@/services/queryClient";
import { CircleNotch } from "@phosphor-icons/react";
import axios from "axios";
import { config } from "process";
import { FormEvent, useContext, useRef } from "react";
import { useMutation } from "react-query";

export function CreatePost() {
  const { token } = useContext(AuthContext);

  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const titulo = title.current?.value;
      const conteudo = content.current?.value;
      await axios.post(
        "http://localhost:5000/publicacoes",
        {
          titulo,
          conteudo,
        },

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["feed"]);
    },
  });
  async function handleCreatePost(e: FormEvent) {
    e.preventDefault();

    mutate();
    setTimeout(() => {
      e.target.reset();
    }, 5);
  }

  return (
    <form
      onSubmit={handleCreatePost}
      className="flex flex-col items-center justify-center gap-2 px-2 py-2 border-b-2"
    >
      <input
        required
        placeholder="titulo"
        className="w-full max-w-[500px] input"
        ref={title}
      />

      <textarea
        required
        ref={content}
        placeholder="escreva o que quiser"
        maxLength={300}
        className="h-[180px] w-full max-w-[500px] rounded resize-none p-2"
      />

      <button
        type="submit"
        className="w-full max-w-[500px] bg-white p-2 rounded flex
        justify-center"
      >
        {isLoading ? (
          <CircleNotch weight="bold" className="m-1 animate-spin" />
        ) : (
          "Criar post"
        )}
      </button>
    </form>
  );
}
