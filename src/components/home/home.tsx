import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
import { CreatePost } from "./createPost";
import { Feed } from "./feed";
import { Header } from "../shared/header";

export function Home() {
  return (
    <>
      <Header />
      <CreatePost />
      <Feed />
    </>
  );
}
