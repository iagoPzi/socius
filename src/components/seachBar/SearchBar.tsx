import { AuthContext } from "@/context/authContext";
import { userProps } from "@/pages/profile/[id]";
import { CircleNotch, MagnifyingGlass } from "@phosphor-icons/react";
import axios from "axios";
import { FormEvent, useContext, useRef, useState } from "react";
import { SearchWindow } from "./SearchWindow";

export function SearchBar() {
  const { token } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<userProps[]>();

  function handleClose() {
    setOpen(false);
  }

  const searchRef = useRef<HTMLInputElement>(null);

  async function Search(e: FormEvent) {
    e.preventDefault();
    const search = searchRef.current?.value;
    setIsLoading(true);

    await axios
      .get(`http://localhost:5000/usuarios?usuario=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSearchData(res.data);
        setIsLoading(false);
        setOpen(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="order-3 xs:order-2 xs:-left-3 flex flex-col items-center w-full max-w-[500px] relative mt-5 xs:mt-0">
      <form
        onSubmit={Search}
        className="flex items-center w-full p-2 bg-white rounded"
      >
        <input
          required
          ref={searchRef}
          placeholder="Pesquisar"
          className="w-full focus:outline-none"
        />
        <div className="flex text-sm text-slate-400">
          {!isLoading ? (
            <button>
              <MagnifyingGlass weight="bold" />
            </button>
          ) : (
            <span>
              <CircleNotch weight="bold" className="animate-spin" />
            </span>
          )}
        </div>
      </form>
      <SearchWindow isOpen={open} handleClose={handleClose} data={searchData} />
    </div>
  );
}
