"use client";
import { decrypt } from "@/app/middleware/checkAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useCookies } from "next-client-cookies";
import Navbar from "@/app/components/Navbar";
import List from "@/app/components/List";

export default function Main() {
  const router = useRouter();
  const [isMobileWidth, setIsMobileWidth] = useState<boolean | null>(null);

  const [prescriptions, setPrescriptions] = useState<object[]>([
    {
      name: "Prescription 1",
      type: "John Doe",
      extra: "12/12/2021",
    },
    {
      name: "Prescription 2",
      type: "John Doe2",
      extra: "12/12/2022",
    },
    {
      name: "Prescription 3",
      type: "John Doe3",
      extra: "12/12/2023",
    },
    {
      name: "Prescription 4",
      type: "John Doe4",
      extra: "12/12/2024",
    },
    {
      name: "Prescription 5",
      type: "John Doe5",
      extra: "12/12/2025",
    },
    {
      name: "Prescription 6",
      type: "John Doe6",
      extra: "12/12/2026",
    },
    {
      name: "Prescription 7",
      type: "John Doe7",
      extra: "12/12/2027",
    },
    {
      name: "Prescription 8",
      type: "John Doe8",
      extra: "12/12/2028",
    },
    {
      name: "Prescription 9",
      type: "John Doe9",
      extra: "12/12/2029",
    },
    {
      name: "Prescription 10",
      type: "John Doe10",
      extra: "12/12/2030",
    },
  ]);
  const [patients, setPatients] = useState<object[]>([
    {
      name: "John Doe",
      type: "69", //age
      extra: 1234567890,
    },
    {
      name: "John Doe2",
      type: "69", //age
      extra: 1234567890,
    },
    {
      name: "John Doe3",
      type: "69", //age
      extra: 1234567890,
    },
    {
      name: "John Doe4",
      type: "69", //age
      extra: 1234567890,
    },
    {
      name: "John Doe5",
      type: "69", //age
      extra: 1234567890,
    },
    {
      name: "John Doe6",
      type: "69", //age
      extra: 1234567890,
    },
    {
      name: "John Doe7",
      type: "69", //age
      extra: 1234567890,
    },
  ]);

  const [onTileClick, setOnTileClick] = useState<"pre" | "pat" | null>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const [greeting, setGreeting] = useState("");
  interface User {
    a_id: string;
    firstName: string;
    lastName: string;
    m_id: string;
    phone: number;
  }

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 4 && hours < 12) setGreeting("Good Morning,");
    else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon,");
    else if (hours >= 17 && hours < 23) setGreeting("Good Evening,");
    else setGreeting("Goodnight,");
  }, [greeting]);

  const [localValue, setlocalValue] = useState<{ [key: string]: User }>({});
  const session = Cookies.get("session");
  async function checking() {
    if (!session) {
      // router.push("/home");
    } else {
      setlocalValue(await decrypt(session));
      //console.log(await decrypt(session));
    }
  }

  useEffect(() => {
    checking();
  });

  const firstName = localValue.user?.firstName;
  if (firstName) {
    console.log("First Name:", firstName);
  } else {
    console.log("First name not found in localValue");
  }

  console.log(firstName);

  useEffect(() => {
    const handleResize = () => setIsMobileWidth(window.innerWidth <= 840);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobileWidth == null || greeting == "")
    return (
      <div className="h-screen grid place-items-center text-center">
        Loading...
      </div>
    );
  return (
    <>
      <Navbar />
      {isMobileWidth ? (
        <>
          <main
            className={`relative mainMain min-h-screen h-full w-screen flex flex-col justify-center gap-4 ${
              (!isExpanded || !onTileClick) && "p-4"
            }`}
          >
            <section className="flex flex-col gap-4 mt-12">
              <div className="flex flex-col m-10 mx-2">
                <span className="mb-4 text-4xl">{greeting}</span>
                <span className="font-bold text-5xl">
                  Dr. {firstName || "Indian"}
                </span>
              </div>
            </section>
            <main
              className={`${
                !isExpanded && "relative"
              } flex w-[calc(100vw-32px)] aspect-square mb-24`}
            >
              <section className="absolute z-0 flex flex-1 w-full aspect-square gap-2 text-black text-opacity-90">
                <div className="relative flex-1 bg-blue-300 text-blue-950 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOnTileClick("pat")}
                    className="w-full h-full"
                  >
                    <div className="absolute top-4 left-4 z-10 flex flex-col items-start pl-2">
                      <span className="text-sm drop-shadow-sm">Patients</span>
                      <h1 className="text-6xl font-bold drop-shadow-sm">102</h1>
                    </div>
                    <Image
                      src={"/patients.svg"}
                      height={500}
                      width={500}
                      alt="prescriptions"
                      className=" hue-rotate-90 opacity-50 absolute z-0 bottom-0"
                    />
                  </button>
                  {/* <Link
                    href={"/upload"}
                    className="absolute bg-red-950 text-white text-center font-medium text-lg w-[calc(100%-24px)] bottom-3 left-1/2 -translate-x-1/2 rounded-lg p-3 flex items-center justify-center gap-2"
                  >
                    <Image
                      src={"/document.png"}
                      height={18}
                      width={18}
                      alt="add prescription"
                      className="invert"
                    />
                    Add
                  </Link> */}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <button
                    onClick={() => setOnTileClick("pre")}
                    className="relative flex-1 bg-red-300 text-red-950 rounded-xl overflow-hidden"
                  >
                    <div className="absolute top-4 left-4 z-10 flex flex-col items-start pl-2 mr-4">
                      <span className="text-left text-sm drop-shadow-sm">
                        Prescriptions
                      </span>
                      <h1 className="text-6xl font-bold drop-shadow-sm">7</h1>
                    </div>
                    <Image
                      src={"/prescriptions.svg"}
                      height={500}
                      width={500}
                      alt="doctors"
                      className="opacity-50 scale-75 absolute z-0 bottom-[-10%] right-[-20%]"
                    />
                  </button>
                  <Link
                    href={"/doctor/editor"}
                    className="relative flex-1 bg-orange-300 text-orange-950 rounded-xl overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-col items-start justify-start h-full m-4 gap-4">
                      <span className="flex items-center text-2xl font-bold drop-shadow-sm">
                        Editor
                        <Image
                          src={"/link.svg"}
                          height={16}
                          width={16}
                          alt="edit"
                          className="inline-block ml-2"
                        />
                      </span>
                      <p className="text-xs">
                        Write prescriptions with assistance, and more.
                      </p>
                    </div>

                    <Image
                      src={"/editor.svg"}
                      height={500}
                      width={500}
                      alt="medicines"
                      className="opacity-50 scale-75 absolute z-0 bottom-[-25px] right-[-25px]"
                    />
                  </Link>
                </div>
              </section>
              <section
                className={`${
                  isExpanded
                    ? "z-50 top-0 w-screen h-screen rounded-none"
                    : "z-10 flex-1 w-full rounded-xl aspect-square"
                } ${
                  onTileClick ? "opacity-100" : "opacity-0 pointer-events-none"
                } absolute overflow-hidden ${
                  onTileClick === "pre"
                    ? "bg-red-300"
                    : onTileClick === "pat"
                    ? "bg-blue-300"
                    : "bg-transparent opacity-0"
                } grid place-items-center`}
              >
                <button
                  className="w-[25px] aspect-square grid place-content-center bg-white absolute top-3 left-3 rounded-full"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <Image
                    src={isExpanded ? "/compress.png" : "/decompress.png"}
                    height={13}
                    width={13}
                    alt={isExpanded ? "minimize" : "maximize"}
                  />
                </button>
                <button
                  className="scanBtn absolute top-3 right-3 rounded-full invert"
                  onClick={() => {
                    setOnTileClick(null);
                    setIsExpanded(false);
                  }}
                >
                  <Image src={"/close.svg"} height={25} width={25} alt="back" />
                </button>

                {onTileClick && (
                  <List
                    list={
                      onTileClick === "pre"
                        ? prescriptions
                        : onTileClick === "pat"
                        ? patients
                        : []
                    }
                    code={onTileClick}
                  />
                )}
              </section>
            </main>
          </main>
        </>
      ) : (
        <main
          className={`relative mainMain max-h-screen w-screen flex flex-row ${
            onTileClick ? "gap-4" : ""
          } py-10 px-28`}
        >
          <section className="w-[calc(50%-0.5rem)] flex-1 flex flex-col gap-4 mt-12 text-black text-opacity-90">
            <div className="relative flex flex-col items-start gap-4 ">
              <div className="relative flex flex-col m-10 mx-2">
                <span className="mb-4 text-4xl">{greeting}</span>
                <span className="font-bold text-5xl">
                  {firstName || "Indian"}
                </span>
              </div>
              <Link
                href={"/upload"}
                className="absolute z-10 bg-red-950 text-white text-center font-medium text-lg w-24 bottom-0 right-0 rounded-xl p-3 flex items-center justify-center gap-2"
              >
                <Image
                  src={"/document.png"}
                  height={18}
                  width={18}
                  alt="add prescription"
                  className="invert"
                />
                Add
              </Link>
              <Image
                src={"/curly_arrow.png"}
                height={64}
                width={64}
                alt="arrow"
                className="absolute z-20 bottom-[-60px] right-[10px] rotate-[256deg] pointer-events-none"
              />
            </div>
            <div className="relative flex flex-1 bg-red-300 text-red-950 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOnTileClick("pre")}
                className="w-full h-full"
              >
                <div className="absolute top-4 left-4 z-10 flex flex-col items-start pl-2">
                  <span className="drop-shadow-sm">Prescriptions</span>
                  <h1 className="text-8xl font-bold drop-shadow-sm">102</h1>
                </div>
                <Image
                  src={"/prescriptions.svg"}
                  height={500}
                  width={500}
                  alt="prescriptions"
                  className="opacity-70 scale-125 h-full absolute z-0 bottom-0 right-[-15%]"
                />
              </button>
            </div>
            <div className="flex-1 flex flex-row gap-4">
              <button
                onClick={() => setOnTileClick("pat")}
                className="relative flex-1 bg-green-300 text-green-950 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10 flex flex-col items-start pl-2">
                  <span className="drop-shadow-sm">Doctors</span>
                  <h1 className="text-8xl font-bold drop-shadow-sm">7</h1>
                </div>
                <Image
                  src={"/doctors.svg"}
                  height={500}
                  width={500}
                  alt="doctors"
                  className="opacity-70 h-full absolute z-0 bottom-0 right-[-20%]"
                />
              </button>
              <button
                // onClick={() => setOnTileClick("med")}
                className="relative flex-1 bg-orange-300 text-orange-950 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10 flex flex-col items-start pl-2">
                  <span className="drop-shadow-sm">Medicines</span>
                  <h1 className="text-8xl font-bold drop-shadow-sm">69</h1>
                </div>
                <Image
                  src={"/medicines.svg"}
                  height={500}
                  width={500}
                  alt="medicines"
                  className="opacity-70 h-full absolute z-0 bottom-[-10%] right-[-20%]"
                />
              </button>
            </div>
          </section>
          <section
            className={`${onTileClick ? "w-[calc(50%-0.5rem)]" : "w-0"} ${
              onTileClick === "pre"
                ? "bg-red-300"
                : onTileClick === "pat"
                ? "bg-blue-300"
                : "bg-transparent"
            } relative overflow-hidden mt-12 bg-blue-300 rounded-2xl grid place-items-center`}
          >
            <button
              className="scanBtn absolute top-3 right-3 rounded-full invert"
              onClick={() => setOnTileClick(null)}
            >
              <Image src={"/close.svg"} height={25} width={25} alt="back" />
            </button>
            {onTileClick && (
              <List
                list={
                  onTileClick === "pre"
                    ? prescriptions
                    : onTileClick === "pat"
                    ? patients
                    : []
                }
                code={onTileClick}
              />
            )}
          </section>
        </main>
      )}
    </>
  );
}
