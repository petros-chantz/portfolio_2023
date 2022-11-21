import { Bars2Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <nav className="navbar">
      <button
        className="flex self-center justify-center"
        onClick={() => setOpen(!isOpen)}
      >
        <Bars2Icon className="w-10 h-10 text-white" />
      </button>
    </nav>
  );
};
