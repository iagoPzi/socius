import { Info } from "@phosphor-icons/react";
import { log } from "console";
import Link from "next/link";
import { useRouter } from "next/router";

export function AboutButton() {
  const router = useRouter();

  return (
    <>
      {router.asPath != "/about" && (
        <Link
          href="/about"
          className="fixed p-2 bg-white rounded-full bottom-2 right-2 xs:bottom-5 xs:right-5"
        >
          <Info weight="bold" className="text-2xl" />
        </Link>
      )}
    </>
  );
}
