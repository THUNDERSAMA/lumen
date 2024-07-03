"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import { getTranslation } from "@/app/utils/TranslationUtils";
import { decrypt } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router from "next/router";
import Cookies from "js-cookie";
import { MouseEventHandler, useEffect, useState } from "react";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Navbar from "@/app/components/Navbar";

export default function DoctorProfile() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

const App = () => {
  interface datas {
    data: any;
    firstName: any;
    lastName: any;
    phone: any;
    aadhar: any;
    language: any;

    // Add other properties if needed
  }
  const [data, setData] = useState<{ [key: string]: datas }>({
    data: {
      firstName: "parthib",
      lastName: "ds",
      phone: "54345435354",
      aadhar: "8989889",
      language: "english",
      data: undefined,
    },
  });
  const [width, setWidth] = useState(0);
  interface User {
    user: any;
    m_id: string;
    // Add other properties if needed
  }

  const [localValue, setlocalValue] = useState<{ [key: string]: User }>({});
  const session = Cookies.get("session");
  async function checking() {
    if (!session) {
      router.push("/home");
    } else {
      setlocalValue(await decrypt(session));
    }
  }

  useEffect(() => {
    checking();
  });

  const patient = localValue.user?.m_id;
  // console.log(patient);

  // useEffect(() => {
  //   getPatId();
  // });

  // async function getPatId() {
  //   try {
  //     const response = await fetch("/api/getUser", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         type: "patient",
  //         m_id: patient,
  //       }),
  //     });
  //     const pat = await response.json();
  //     console.log(pat);
  //     if (!response.ok) {
  //       throw new Error("Failed to login");
  //     } else {
  //       setData(pat);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // try {
  //   const response = await fetch("/api/patient_signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       "type" : "doc",
  //       "m_id" : patient
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   if (!response.ok) {
  //     throw new Error("Failed to login");
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  // }

  return (
    <>
      <Navbar />
      {width <= 840 ? (
        <>
          <main className="w-full min-h-screen h-full flex flex-col gap-4 p-4 pt-28 pb-8">
            <section>
              <h1 className="font-bold text-4xl">Account details</h1>
            </section>
            <section className="w-full rounded-3xl p-4 border-[1px] border-black flex flex-col gap-4">
              <h2 className="font-medium">Personal Details</h2>
              <div className="w-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full p-3 rounded-l-2xl border-[1px] border-black border-r-0 bg-white">
                    <label
                      htmlFor="firstName"
                      className="text-xs px-1 bg-white absolute -top-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className=" bg-white bg-opacity-0 w-full outline-none"
                      placeholder="first name of doctor"
                      value={data.data.firstName}
                    />
                  </div>
                  <div className="relative w-full p-3 rounded-r-2xl border-[1px] border-black bg-white">
                    <label
                      htmlFor="lastName"
                      className="text-xs px-1 bg-white absolute -top-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className=" bg-white bg-opacity-0 w-full outline-none"
                      placeholder="first name of doctor"
                      value={data.data.lastName}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full rounded-3xl p-4 border-[1px] border-black flex flex-col gap-4">
              <h2 className="font-medium">Contact Details</h2>
              <div className="relative w-full p-3 rounded-2xl border-[1px] border-black bg-white">
                <label
                  htmlFor="phone"
                  className="text-xs px-1 bg-white absolute -top-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className=" bg-white bg-opacity-0 w-full outline-none"
                  placeholder="phone number of doctor"
                  value={data.data.phone}
                />
              </div>
            </section>

            <section className="w-full rounded-3xl p-4 border-[1px] border-black flex flex-col gap-4">
              <h2 className="font-medium">Other Details</h2>

              <div className="relative w-full p-3 rounded-2xl border-[1px] border-black bg-white">
                <label
                  htmlFor="aadhar"
                  className="text-xs px-1 bg-white absolute -top-2"
                >
                  Aadhar Card
                </label>
                <input
                  type="text"
                  name="aadhar"
                  id="aadhar"
                  className="bg-white bg-opacity-0 w-full outline-none"
                  placeholder="aadhar of doctor"
                  value={data.data.aadhar}
                />
              </div>
              <div className="relative w-full p-3 rounded-2xl border-[1px] border-black bg-white">
                <label
                  htmlFor="gender"
                  className="text-xs px-1 bg-white absolute -top-2"
                >
                  Language
                </label>
                <select
                  id="gender"
                  className=" w-full flex-1 appearance-none bg-white bg-opacity-20 border-0 text-gray-80 rounded-lg py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-100"
                >
                  <option
                    value="en"
                    className="text-black-800"
                    selected={data.data.language === "en"}
                  >
                    English
                  </option>
                  <option
                    value="hi"
                    className="text-gray-800"
                    selected={data.data.language === "Hi"}
                  >
                    हिंदी
                  </option>
                  <option
                    value="bn"
                    className="text-gray-800"
                    selected={data.data.language === "Bn"}
                  >
                    বাংলা
                  </option>
                  <option
                    value="mr"
                    className="text-gray-800"
                    selected={data.data.language === "Mr"}
                  >
                    मराठी
                  </option>
                  <option
                    value="te"
                    className="text-gray-800"
                    selected={data.data.language === "Te"}
                  >
                    తెలుగు
                  </option>
                </select>
              </div>
              <Link
                href=""
                className="text-red-600 text-xs px-2 pt-4 font-semibold underline"
              >
                Complete your 2-Factor Authentication
              </Link>
            </section>
          </main>
        </>
      ) : (
        <>
          <main className="w-full min-h-screen h-full flex flex-row gap-4 px-28 pt-40">
            <section className="w-full h-full flex flex-col gap-4">
              <section className="w-full rounded-3xl p-4 border-[1px] border-black flex flex-col gap-4">
                <h2 className="font-medium">Personal Details</h2>
                <div className="w-full flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative w-full p-3 rounded-l-2xl border-[1px] border-black border-r-0 bg-white">
                      <label
                        htmlFor="firstName"
                        className="text-xs px-1 bg-white absolute -top-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className=" bg-white bg-opacity-0 w-full outline-none"
                        placeholder="first name of doctor"
                        value={data.data.firstName}
                      />
                    </div>
                    <div className="relative w-full p-3 rounded-r-2xl border-[1px] border-black bg-white">
                      <label
                        htmlFor="lastName"
                        className="text-xs px-1 bg-white absolute -top-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className=" bg-white bg-opacity-0 w-full outline-none"
                        placeholder="first name of doctor"
                        value={data.data.lastName}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="w-full rounded-3xl p-4 border-[1px] border-black flex flex-col gap-4">
                <h2 className="font-medium">Contact Details</h2>
                <div className="relative w-full p-3 rounded-2xl border-[1px] border-black bg-white">
                  <label
                    htmlFor="phone"
                    className="text-xs px-1 bg-white absolute -top-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className=" bg-white bg-opacity-0 w-full outline-none"
                    placeholder="phone number of doctor"
                    value={data.data.phone}
                  />
                </div>
              </section>
            </section>
            <section className="w-full h-full rounded-3xl p-4 border-[1px] border-black flex flex-col gap-4">
              <h2 className="font-medium">Other Details</h2>

              <div className="relative w-full p-3 rounded-2xl border-[1px] border-black bg-white">
                <label
                  htmlFor="aadhar"
                  className="text-xs px-1 bg-white absolute -top-2"
                >
                  Aadhar Card
                </label>
                <input
                  type="text"
                  name="aadhar"
                  id="aadhar"
                  className="bg-white bg-opacity-0 w-full outline-none"
                  placeholder="aadhar of doctor"
                  value={data.data.aadhar}
                />
              </div>
              <div className="relative w-full p-3 rounded-2xl border-[1px] border-black bg-white">
                <label
                  htmlFor="gender"
                  className="text-xs px-1 bg-white absolute -top-2"
                >
                  Language
                </label>
                <select
                  id="gender"
                  className=" w-full flex-1 appearance-none bg-white bg-opacity-20 border-0 text-gray-80 rounded-lg py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-100"
                >
                  <option
                    value="en"
                    className="text-black-800"
                    selected={data.data.language === "en"}
                  >
                    English
                  </option>
                  <option
                    value="hi"
                    className="text-gray-800"
                    selected={data.data.language === "Hi"}
                  >
                    हिंदी
                  </option>
                  <option
                    value="bn"
                    className="text-gray-800"
                    selected={data.data.language === "Bn"}
                  >
                    বাংলা
                  </option>
                  <option
                    value="mr"
                    className="text-gray-800"
                    selected={data.data.language === "Mr"}
                  >
                    मराठी
                  </option>
                  <option
                    value="te"
                    className="text-gray-800"
                    selected={data.data.language === "Te"}
                  >
                    తెలుగు
                  </option>
                </select>
              </div>
              <Link
                href=""
                className="text-red-600 text-xs px-2 pt-4 font-semibold underline"
              >
                Complete your 2-Factor Authentication
              </Link>
            </section>
          </main>
        </>
      )}
    </>
  );
};
