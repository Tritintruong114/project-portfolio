"use client";
import { useState } from "react";
const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="flex justify-between items-center px-6 z-10 w-full">
      header
    </header>
  );
};

export default HeaderComponent;
