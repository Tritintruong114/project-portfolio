"use client";
import * as headerData from "@/data/header.json";
import cn from "@/utils/clxs/cn";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const size = useWindowSize();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    // Tailwind's "md" breakpoint typically starts at 768px
    if (size.width !== null && size.width >= 768) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header className="px-6 py-4 fixed w-full sm:flex items-center justify-center">
      <div className="flex bg-brand-primary sm:w-fit bg-opacity-10 backdrop-blur-3xl relative justify-between items-center border border-brand-primary px-3 py-3 border-opacity-10 sm:justify-center gap-12">
        <div className="text-white">Logo</div>

        <ul
          className={cn(
            " sm:gap-12 absolute sm:relative  text-brand-primary font-extralight bg-brand-primary sm:bg-transparent bg-opacity-10 sm:bg-opacity-0  w-full left-0 top-[70px] sm:top-0 flex-col sm:flex-row items-center justify-center gap-6 p-6 sm:p-0 border border-brand-primary border-opacity-10 sm:border-0",
            showMenu === true ? "flex" : "hidden sm:flex"
          )}
        >
          {headerData.header.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className="uppercase sm:text-sm w-full "
              >
                <li className="w-full text-center cursor-pointer hover:text-black duration-300 hover:bg-brand-primary py-2 sm:py-0 sm:hover:text-white sm:hover:bg-transparent">
                  {item.label}
                </li>
              </Link>
            );
          })}
          <button className="bg-brand-primary font-primary text-sm px-3 py-2 tracking-widest rounded uppercase font-extralight w-full sm:hidden flex text-black items-center justify-center">
            Let&#39;s Talk
          </button>
        </ul>

        <div className="flex items-center gap-3 ">
          <button className="bg-brand-primary font-primary text-sm px-3 py-2 tracking-widest rounded uppercase font-extralight w-[120px]">
            Let&#39;s Talk
          </button>
          <div className="items-center flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="material-symbols-outlined cursor-pointer scale-125  font-light text-brand-primary"
            >
              {showMenu ? "close" : "menu"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
