import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

export function Modalbase({ children }: PropsWithChildren) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50">
        <Dialog.Content className="fixed p-5 -translate-x-1/2 -translate-y-1/2 rounded bg-zinc-200 top-1/2 left-1/2">
          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}

{
  /* <Dialog.Root>
<Dialog.Trigger>abrir</Dialog.Trigger>
<Dialog.Portal>
  <Dialog.Overlay className="fixed inset-0 bg-black/50">
    <Dialog.Content className="fixed p-5 -translate-x-1/2 -translate-y-1/2 rounded bg-zinc-200 top-1/2 left-1/2">
      <Dialog.Title>Alterar perfil</Dialog.Title>
      <Dialog.Description />
      <Dialog.Close />
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </Dialog.Content>
  </Dialog.Overlay>
</Dialog.Portal>
</Dialog.Root> */
}
