import { AuthContext } from "@/context/authContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useState } from "react";
import { DeletePost } from "./delelePost";
import { PostProps } from "./feed";
import { Heart } from "@phosphor-icons/react";

export function Post(props: PostProps) {
  const { token, id } = useContext(AuthContext);
  const [likes, setLikes] = useState(props.curtidas);
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(`liked-${props.id}`) === "true"
  );

  var date = new Date(props.criadaEm);

  async function Curtir() {
    await axios
      .post(
        `http://localhost:5000/publicacoes/${props.id}/curtir`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setLikes(likes + 1);
        setIsLiked(true);
        localStorage.setItem(`liked-${props.id}`, "true");
      })
      .catch((err) => console.log(err));
  }

  async function Descurtir() {
    await axios
      .post(
        `http://localhost:5000/publicacoes/${props.id}/descurtir`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setLikes(likes - 1);
        setIsLiked(false);
        localStorage.removeItem(`liked-${props.id}`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-w-[200px] w-full max-w-[500px] bg-blue-400 p-3 rounded-lg">
      <div>
        <Link href={`/profile/${props.autorId}`}>{props.autorNick}</Link>
      </div>
      <div className="font-bold">
        <h3>{props.titulo}</h3>
        <p>{props.conteudo}</p>
      </div>
      <div className="flex justify-between gap-10">
        <button
          onClick={!isLiked ? Curtir : Descurtir}
          className={`${
            isLiked && "bg-blue-500"
          } p-1 rounded flex items-center gap-2`}
        >
          <Heart weight={!isLiked ? "bold" : "fill"} />
          {likes}
        </button>
        <span>{date.toLocaleDateString()}</span>
      </div>
      {props.autorId == id && <DeletePost postId={props.id} />}
    </div>
  );
}
