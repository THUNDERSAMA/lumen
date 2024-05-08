"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Main() {
  const [width, setWidth] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [greeting, setGreeting] = useState("Hello,");

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 4 && hours < 12) setGreeting("Good Morning,");
    else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon,");
    else if (hours >= 17 && hours < 23) setGreeting("Good Evening,");
    else setGreeting("Goodnight,");
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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width <= 840)
    return (
      <>
        <section
          className={`fixed z-30 ${
            toggleMenu ? "top-0 border-b-[1px] border-b-black" : " top-[-300px]"
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
            className="w-40 h-[46px] px-4 font-light text-sm text-left border-[1.5px] border-black rounded-full bg-transparent placeholder:italic"
          />
        </nav>
        <Link
          href={""}
          className="scanBtn fixed z-30 bottom-4 right-4 flex border-black bg-transparent rounded-full aspect-square"
        >
          <Image src={"/add.png"} height={70} width={70} alt="add" />
        </Link>
        <main className="relative mainMain h-full w-screen flex flex-col gap-4 p-4 pb-24">
          <section className="flex flex-col gap-4 mt-12">
            <div className="flex flex-col m-10 mx-2">
              <span className="mb-4 text-4xl">{greeting}</span>
              <span className="font-bold text-5xl">Parthib</span>
            </div>
          </section>
          <section className="flex w-full aspect-square gap-2 text-black text-opacity-90">
            <Link
              href={""}
              className="relative flex-1 bg-red-300 rounded-xl overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="text-sm drop-shadow-sm">Prescriptions</span>
                <h1 className="text-6xl font-bold drop-shadow-sm">102</h1>
              </div>
              <Image
                src={"/prescriptions.svg"}
                height={500}
                width={500}
                alt="prescriptions"
                className="absolute z-0 bottom-0"
              />
            </Link>
            <div className="flex-1 flex flex-col gap-2">
              <Link
                href={""}
                className="relative flex-1 bg-green-300 rounded-xl overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-sm drop-shadow-sm">Doctors</span>
                  <h1 className="text-6xl font-bold drop-shadow-sm">7</h1>
                </div>
                <Image
                  src={"/doctors.svg"}
                  height={500}
                  width={500}
                  alt="doctors"
                  className="scale-75 absolute z-0 bottom-[-10%] right-[-20%]"
                />
              </Link>
              <Link
                href={""}
                className="relative flex-1 bg-orange-300 rounded-xl overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-sm drop-shadow-sm">Medicines</span>
                  <h1 className="text-6xl font-bold drop-shadow-sm">69</h1>
                </div>
                <Image
                  src={"/medicines.svg"}
                  height={500}
                  width={500}
                  alt="medicines"
                  className="scale-75 absolute z-0 bottom-[-10%] right-[-10%]"
                />
              </Link>
            </div>
          </section>
          <section className="w-full aspect-square bg-blue-300 rounded-xl grid place-items-center">
            more...
          </section>
        </main>
      </>
    );
  else
    return (
      <>
        <nav
          className="fixed z-30 w-screen h-20 px-28 flex items-center justify-between"
          style={{
            // backdropFilter: `blur(${scrollValue * 10}px)`,
            backgroundColor: `rgba(255 255 255 / ${scrollValue})`,
            borderBottom: `1px solid rgba(0 0 0 / ${scrollValue / 2})`,
          }}
        >
          <Link
            href={"/main"}
            className="font-extrabold text-3xl text-blue-900"
          >
            R<sub>x</sub>
            {width >= 950 && " "}
            <span className="text-2xl font-black">
              K{width >= 950 && `EEP`}
            </span>
          </Link>
          <ul className="flex gap-2">
            {/* <Link href={""} className="hover:text-orange-700">
              Upload
            </Link>
            <span className="text-slate-300">|</span> */}
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
            className="w-40 h-[46px] px-4 font-light text-sm text-left border-[1.5px] border-black rounded-full bg-transparent placeholder:italic"
          />
        </nav>
        <main className="relative mainMain min-h-screen h-full w-screen flex flex-row gap-4 py-10 px-28">
          <section className="w-[calc(50%-0.5rem)] flex-1 flex flex-col gap-4 mt-12 text-black text-opacity-90">
            <div className="flex flex-col gap-4 ">
              <div className="relative flex flex-col m-10 mx-2">
                <span className="mb-4 text-4xl">{greeting}</span>
                <span className="font-bold text-5xl">Parthib</span>
                <Link
                  href={""}
                  title="Upload Prescription"
                  className="h-[50px] scanBtn absolute z-30 bottom-0 right-5 flex border-black bg-transparent rounded-full aspect-square"
                >
                  <Image src={"/add.png"} height={50} width={50} alt="add" />
                </Link>
              </div>
            </div>
            <Link
              href={""}
              className="relative flex-1 bg-red-300 rounded-2xl overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="drop-shadow-sm">Prescriptions</span>
                <h1 className="text-8xl font-bold drop-shadow-sm">102</h1>
              </div>
              <Image
                src={"/prescriptions.svg"}
                height={500}
                width={500}
                alt="prescriptions"
                className="scale-125 h-full absolute z-0 bottom-0 right-[-20%]"
              />
            </Link>
            <div className="flex-1 flex flex-row gap-4">
              <Link
                href={""}
                className="relative flex-1 bg-green-300 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="drop-shadow-sm">Doctors</span>
                  <h1 className="text-8xl font-bold drop-shadow-sm">7</h1>
                </div>
                <Image
                  src={"/doctors.svg"}
                  height={500}
                  width={500}
                  alt="doctors"
                  className="h-full absolute z-0 bottom-0 right-[-20%]"
                />
              </Link>
              <Link
                href={""}
                className="relative flex-1 bg-orange-300 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="drop-shadow-sm">Medicines</span>
                  <h1 className="text-8xl font-bold drop-shadow-sm">69</h1>
                </div>
                <Image
                  src={"/medicines.svg"}
                  height={500}
                  width={500}
                  alt="medicines"
                  className="h-full absolute z-0 bottom-[-10%] right-[-20%]"
                />
              </Link>
            </div>
          </section>
          <section className="w-[calc(50%-0.5rem)] mt-12 flex-1 bg-blue-300 rounded-2xl grid place-items-center">
            more...
          </section>
        </main>
      </>
    );
}
