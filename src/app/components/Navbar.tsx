"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ElementBound from "./ElementBound";

export default function Navbar() {
  const [width, setWidth] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem, ipsum dolor.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit adipisicing.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ]);

  // function handleOutsideClick(clickedOutside: boolean) {
  //   if (clickedOutside) setToggleMenu(false);
  // }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollValue(Math.min(1, scrollTop / 50));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (width == 0) return null;

  if (width <= 840)
    return (
      <>
        <ElementBound onOutsideClick={setToggleMenu}>
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
            borderBottom: `1px solid rgba(0 0 0 / ${scrollValue / 10})`,
          }}
        >
          <button
            className="w-[50px] h-[50px] scanBtn rounded-full"
            onClick={() => setToggleMenu(true)}
          >
            <Image src={"/menu.png"} height={50} width={50} alt="menu" />
          </button>
          <ElementBound onOutsideClick={setIsNotiOpen}>
            <>
              <span className="relative flex items-center gap-1">
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-40 h-[50px] px-4 font-light text-sm text-left border-[1px] border-black rounded-full bg-white placeholder:italic"
                />
                <button
                  className="w-[50px] h-[50px] bg-white border-black border-[1px] grid place-content-center rounded-full"
                  onClick={() => setIsNotiOpen(!isNotiOpen)}
                >
                  <Image
                    src={
                      isNotiOpen ? "/noti_bell.svg" : "/noti_bell_active.svg"
                    }
                    height={25}
                    width={25}
                    alt="menu"
                  />
                </button>
              </span>
              <div
                className={`absolute top-[72px] right-0 w-3/4 ${
                  isNotiOpen ? "h-64" : "h-0 opacity-0"
                } mx-4 border-[1px] border-black rounded-2xl p-1 bg-white flex flex-col overflow-auto noScrollBar`}
              >
                {notifications.map((noti, index) => (
                  <Link
                    href={""}
                    key={index}
                    className="p-2 px-3 rounded-xl odd:bg-slate-100"
                  >
                    {noti}
                  </Link>
                ))}
              </div>
            </>
          </ElementBound>
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
          borderBottom: `1px solid rgba(0 0 0 / ${scrollValue / 10})`,
        }}
      >
        <Link
          href={"/main"}
          className="lUmen font-extrabold text-3xl text-green-800"
        >
          {/* R<sub>x</sub>
          {width >= 950 && " "}
          <span className="text-2xl font-black">K{width >= 950 && `EEP`}</span> */}
          mn
        </Link>
        <ul className="flex gap-2">
          <Link
            href={""}
            title="Compare medicines and buy them at lowest cost"
            className="hover:text-orange-700"
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
          <span className="text-slate-300">|</span>
          <Link
            href={"profile"}
            title="Account & settings"
            className="hover:text-orange-700"
          >
            Profile
          </Link>
        </ul>
        <ElementBound onOutsideClick={setIsNotiOpen}>
          <>
            <span className="relative flex items-center gap-1">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-40 h-[50px] px-4 font-light text-sm text-left border-[1px] border-black rounded-full bg-white placeholder:italic"
              />
              <button
                className="w-[50px] h-[50px] bg-white border-black border-[1px] grid place-content-center rounded-full"
                onClick={() => setIsNotiOpen(!isNotiOpen)}
              >
                <Image
                  src={isNotiOpen ? "/noti_bell.svg" : "/noti_bell_active.svg"}
                  height={25}
                  width={25}
                  alt="menu"
                />
              </button>
            </span>
            <div
              className={`absolute top-[72px] right-0 w-1/3 ${
                isNotiOpen ? "h-64" : "h-0 opacity-0"
              } mx-24 border-[1px] border-black rounded-2xl p-1 bg-white flex flex-col overflow-auto noScrollBar`}
            >
              {notifications.map((noti, index) => (
                <Link
                  href={""}
                  key={index}
                  className="p-2 px-3 rounded-xl odd:bg-slate-100"
                >
                  {noti}
                </Link>
              ))}
            </div>
          </>
        </ElementBound>
      </nav>
    );
}
