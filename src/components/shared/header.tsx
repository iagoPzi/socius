import { AuthContext } from "@/context/authContext";
import { MagnifyingGlass, Power, UserCircle } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useRef } from "react";
import { Logo } from "../../../public/logo";
import { SearchBar } from "../seachBar/SearchBar";

export function Header() {
  const router = useRouter();
  const { Logout, id } = useContext(AuthContext);

  function HandleLogout() {
    Logout();

    router.push("/");
  }

  return (
    <header className="w-full px-2 bg-blue-400">
      <div className="flex flex-wrap items-center justify-around py-8 innerContainer">
        <Link href="/feed" className="order 1">
          <Logo width="50px" />
        </Link>
        <SearchBar />

        <div className="flex order-2 gap-2 text-2xl xs:flex-col text-white">
          <Link href={`/profile/${id}`}>
            <UserCircle weight="bold" />
          </Link>
          <button onClick={HandleLogout}>
            <Power weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
}
