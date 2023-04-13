import { X } from "@phosphor-icons/react";
import * as Toast from "@radix-ui/react-toast";

interface ToastErrProps {
  message: string;
  onClose: () => void;
}

export function ToastErr({ message, onClose }: ToastErrProps) {
  return (
    <Toast.Provider>
      <Toast.Root
        onOpenChange={onClose}
        className="relative px-5 py-8 text-white bg-red-600 rounded"
      >
        <Toast.Description>{message}</Toast.Description>
        <Toast.Close className="absolute top-2 right-2">
          <X />
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed right-20 bottom-10" />
    </Toast.Provider>
  );
}

{
  /* <Toast.Provider>
  <Toast.Root>
    <Toast.Title>erro</Toast.Title>
    <Toast.Description>erro desc</Toast.Description>
    <Toast.Action altText="erro">action</Toast.Action>
    <Toast.Close>close</Toast.Close>
  </Toast.Root>

  <Toast.Viewport />
</Toast.Provider>; */
}
