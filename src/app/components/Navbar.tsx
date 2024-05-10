"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ElementBound from "./ElementBound";

export default function Navbar({ scrollValue }: { scrollValue: number }) {
  const [width, setWidth] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleOutsideClick(clickedOutside: boolean) {
    if (clickedOutside) setToggleMenu(false);
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width == 0) return null;

  if (width <= 840)
    return (
      <>
        <ElementBound onOutsideClick={handleOutsideClick}>
          <section
            className={`fixed z-30 ${
              toggleMenu
                ? "top-0 border-b-[1px] border-b-black"
                : " top-[-300px]"
            } w-screen bg-white p-4 pb-10`}
          >
            <button onClick={() => setToggleMenu(false)}>
              <Image src={"/back.png"} height={50} width={50} alt="back" />
            </button>
            <ul className="flex flex-col items-center gap-4">
              <Link href={""}>
                R<sub>x</sub>Meds
              </Link>
              <Link href={""}>Profile</Link>
              <Link href={""}>Settings</Link>
            </ul>
          </section>
        </ElementBound>
        <nav
          className="fixed w-screen z-20 flex justify-between items-center gap-2 p-4"
          style={{
            // backdropFilter: `blur(${scrollValue * 10}px)`,
            backgroundColor: `rgba(255 255 255 / ${scrollValue})`,
            borderBottom: `1px solid rgba(0 0 0 / ${scrollValue / 2})`,
          }}
        >
          <button
            className="w-[50px] h-[50px]"
            onClick={() => setToggleMenu(true)}
          >
            <Image src={"/menu.png"} height={50} width={50} alt="menu" />
          </button>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-40 h-[46px] px-4 font-light text-sm text-left border-[1.5px] border-black rounded-full bg-white placeholder:italic"
          />
        </nav>
      </>
    );
  else
    return (
      <nav
        className="fixed z-30 w-screen h-20 px-28 flex items-center justify-between"
        style={{
          // backdropFilter: `blur(${scrollValue * 10}px)`,
          backgroundColor: `rgba(255 255 255 / ${scrollValue})`,
          borderBottom: `1px solid rgba(0 0 0 / ${scrollValue / 2})`,
        }}
      >
        <Link href={"/main"} className="font-extrabold text-3xl text-blue-900">
          R<sub>x</sub>
          {width >= 950 && " "}
          <span className="text-2xl font-black">K{width >= 950 && `EEP`}</span>
        </Link>
        <ul className="flex gap-2">
          <Link
            href={""}
            title="Compare medicines and buy them at lowest cost"
            className="hover:text-orange-700 font-semibold"
          >
            R<sub>x</sub>Meds
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href={""}
            title="Account & settings"
            className="hover:text-orange-700"
          >
            Settings
          </Link>
        </ul>
        <input
          type="text"
          placeholder="Search anything..."
          className="w-40 h-[46px] px-4 font-light text-sm text-left border-[1.5px] border-black rounded-full bg-white placeholder:italic"
        />
      </nav>
    );
}
