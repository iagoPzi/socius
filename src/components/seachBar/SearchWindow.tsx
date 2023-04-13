import { userProps } from "@/pages/profile/[id]";
import { X } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { useRouter } from "next/router";

interface SearchWindowProps {
  isOpen: boolean;
  handleClose: () => void;
  data?: userProps[];
}

export function SearchWindow({ isOpen, handleClose, data }: SearchWindowProps) {
  return (
    <>
      {isOpen && (
        <div className="absolute left-0 flex flex-col w-full gap-2 p-2 text-white top-11 bg-blue-900/90 rounded-b-md">
          <button onClick={handleClose} className="absolute right-2 top-2">
            <X weight="bold" />
          </button>

          {data?.map((user) => {
            return (
              <Link
                key={user.id}
                href={`/profile/${user.id}`}
                className="flex items-center gap-2 w-fit"
              >
                <span className="font-bold">{user.nome}</span>
                <span className="font-thin">#{user.nick}</span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

{
  /* <Popover.Root>
<Popover.Trigger />
<Popover.Anchor />
<Popover.Portal>
  <Popover.Content>
    <Popover.Close />
    <Popover.Arrow />
  </Popover.Content>
</Popover.Portal>
</Popover.Root> */
}
