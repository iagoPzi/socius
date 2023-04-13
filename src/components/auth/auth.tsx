import * as Tabs from "@radix-ui/react-tabs";
import { Login } from "./login";
import { Register } from "./register";

export function Auth() {
  return (
    <div className="grid max-w-md min-w-full min-h-screen place-items-center">
      <Tabs.Root className="p-5 rounded bg-slate-400 min-w-52 md:w-[30%] max-w-[500px]">
        <Tabs.List className="flex justify-around mb-5">
          <Tabs.Trigger value="login">Login</Tabs.Trigger>
          <Tabs.Trigger value="register">Register</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="login">
          <Login />
        </Tabs.Content>
        <Tabs.Content value="register">
          <Register />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
