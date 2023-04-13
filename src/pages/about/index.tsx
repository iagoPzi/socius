import Head from "next/head";
import Link from "next/link";
import { Logo } from "../../../public/logo";

export default function About() {
  const techs = [
    { name: "Next com Typescript" },
    { name: "TailwindCss" },
    { name: "Api em Golang" },
  ];

  return (
    <>
      <Head>
        <title>Socius | About</title>
      </Head>
      <div className="px-2">
        <div className="innerContainer">
          <div className="flex items-center justify-center py-5">
            <Link href="/feed" className="relative flex flex-col items-center">
              <Logo width="50px" />
              <span className="text-[12px] absolute bottom-0 bg-white">
                home
              </span>
            </Link>
            <h1>Sobre o projeto</h1>
          </div>
          <div className="mx-auto max-w-[300px] flex flex-col gap-3">
            <p>Este projeto foi desenvolvido usando as seguintes tecnologias</p>
            <ul>
              {techs.map((tech) => {
                return <li key={tech.name}>{tech.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
