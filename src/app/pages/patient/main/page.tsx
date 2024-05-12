"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { decrypt } from "@/app/middleware/checkAuth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function Main() {
  const router = useRouter();

  const [width, setWidth] = useState(0);
  // const [scrollValue, setScrollValue] = useState(0);
  const [greeting, setGreeting] = useState("");
  interface User {
    user: any;
    firstName: string;
  }

  const [localValue, setlocalValue] = useState<{ [key: string]: User }>({});
  const session = Cookies.get("session");
  async function checking() {
    if (!session) {
      router.push("/home");
    } else {
      setlocalValue(await decrypt(session));
      //console.log(await decrypt(session));
    }
  }
  useEffect(() => {
    checking();
  }, []);
  //const session = Cookies.get("session");
  const firstName = localValue.user?.firstName;
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 4 && hours < 12) setGreeting("Good Morning,");
    else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon,");
    else if (hours >= 17 && hours < 23) setGreeting("Good Evening,");
    else setGreeting("Goodnight,");
  }, [greeting]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     setScrollValue(Math.min(1, scrollTop / 50));
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width == 0 || greeting == "")
    return (
      <div className="h-screen grid place-items-center text-center">
        Loading...
      </div>
    );

  return (
    <>
      <Navbar />
      {width <= 840 ? (
        <>
          <Link
            href={"/upload"}
            className="scanBtn fixed z-30 bottom-4 right-4 flex border-black bg-transparent rounded-full aspect-square"
          >
            <Image src={"/add.png"} height={70} width={70} alt="add" />
          </Link>
          <main className="relative mainMain h-full w-screen flex flex-col gap-4 p-4 pb-24">
            <section className="flex flex-col gap-4 mt-12">
              <div className="flex flex-col m-10 mx-2">
                <span className="mb-4 text-4xl">{greeting}</span>
                <span className="font-bold text-5xl">{firstName}</span>
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
      ) : (
        <main className="relative mainMain min-h-screen h-full w-screen flex flex-row gap-4 py-10 px-28">
          <section className="w-[calc(50%-0.5rem)] flex-1 flex flex-col gap-4 mt-12 text-black text-opacity-90">
            <div className="flex flex-col gap-4 ">
              <div className="relative flex flex-col m-10 mx-2">
                <span className="mb-4 text-4xl">{greeting}</span>
                <span className="font-bold text-5xl">{firstName}</span>
                <Link
                  href={"/upload"}
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
      )}
    </>
  );
}
