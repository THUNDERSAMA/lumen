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
import KeyIcon from "@mui/icons-material/Key";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

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
    license: any;
    auth: any;

    // Add other properties if needed
  }
  const [data, setData] = useState<{ [key: string]: datas }>({});
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
  }, []);

  const patient = localValue.user?.m_id;
  // console.log(patient);

  useEffect(() => {
    getPatId();
  }, [patient]);

  async function getPatId() {
    try {
      const response = await fetch("/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "patient",
          m_id: patient,
        }),
      });
      const pat = await response.json();
      console.log(pat);
      if (!response.ok) {
        throw new Error("Failed to login");
      } else {
        setData(pat);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

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
  // console.log(data.data);
  if (data.data == null) {
    return (
      <>
        <div className="pl-8 pr-8 pt-8 bg-slate-100  ">
          <h1 className="font-bold text-xl">Account & Details</h1>
          <div className="constainer mx-auto h-screen">
            <div className="gap-8 h-screen ">
              <div className="w-full bg-slate-200 rounded-lg p-4 m-4  shadow-inner border-4 border-indigo-200 border-r-indigo-500">
                <div className="flex justify-center item-center">
                  <div className="p-3  rounded-full bg-white bg-opacity-20 ">
                    {/* <img src={patient.image} alt="Patient" className="cover" /> */}
                    <Skeleton
                      className="w-full"
                      variant="circular"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <Skeleton
                  className="w-full"
                  variant="rounded"
                  // width={210}
                  height={184}
                />
              </div>

              <div className="w-full break-inside-avoid-column bg-slate-200 rounded-lg p-4 m-4 shadow-inner border-4 border-indigo-200 border-r-indigo-500">
                <Typography variant="h1">
                  <Skeleton />{" "}
                </Typography>

                <Skeleton className="w-full" variant="rounded" height={120} />
              </div>
              <div className="w-full break-inside-avoid-column bg-slate-200 rounded-lg p-4 m-4 shadow-inner border-4 border-indigo-200 border-r-indigo-500 mr-2">
                <Skeleton className="w-full" variant="rounded" height={184} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {width <= 840 ? (
        <>
          <div className="pl-8 pr-8 pt-8 bg-slate-100  ">
            <h1 className="font-bold text-xl">Account & Details</h1>
            <div className="constainer mx-auto h-screen">
              <div className="gap-8 h-screen ">
                <div className="w-full bg-slate-200 rounded-lg p-4 m-4  shadow-inner border-4 border-indigo-200 border-r-indigo-500">
                  <h2 className="font-bold text-base">Personal Details</h2>
                  <div className="w-full flex items-center justify-center break-inside-avoid-column">
                    <div className="col-span">
                      <div>
                        <div className="flex justify-center item-center">
                          <div className="p-3  rounded-full bg-white bg-opacity-20 ">
                            {/* <img src={patient.image} alt="Patient" className="cover" /> */}
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png"
                              alt="doctor"
                              className="cover"
                            />
                          </div>
                        </div>
                        <p className="opacity-80 text-center text-base">
                          Doctor Profile
                        </p>
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
                          <label
                            htmlFor="firstName"
                            className="placeholder:text-gray-300 font-semibold text-base"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className=" bg-white bg-opacity-0 text-xs w-full"
                            placeholder="first name of doctor"
                            value={data.data.firstName}
                          />
                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
                            <label
                              htmlFor="lastName"
                              className="placeholder:text-gray-300 font-semibold text-base"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              className=" bg-white bg-opacity-0 text-xs w-full"
                              placeholder="first name of doctor"
                              value={data.data.lastName}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full break-inside-avoid-column bg-slate-200 rounded-lg p-4 m-4 shadow-inner border-4 border-indigo-200 border-r-indigo-500">
                  <h2 className="font-bold text-base">Contact Details</h2>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
                      <label
                        htmlFor="phone"
                        className="placeholder:text-gray-300 font-semibold text-base"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className=" bg-white bg-opacity-0 text-xs w-full"
                        placeholder="phone number of doctor"
                        value={data.data.phone}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full break-inside-avoid-column bg-slate-200 rounded-lg p-4 m-4 shadow-inner border-4 border-indigo-200 border-r-indigo-500 mr-2">
                  <h2 className="font-bold text-base">Other Details</h2>
                  <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
                    <label
                      htmlFor="license"
                      className="placeholder:text-gray-300 font-semibold text-base"
                    >
                      {" "}
                      License Number
                    </label>
                    <input
                      type="text"
                      name="license"
                      id="license"
                      className=" bg-white bg-opacity-0 text-xs w-full "
                      placeholder="license of doctor"
                      value={data.data.license}
                    />
                  </div>

                  <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
                    <label
                      htmlFor="aadhar"
                      className="placeholder:text-gray-300 font-semibold text-base"
                    >
                      {" "}
                      Aadhar Card
                    </label>
                    <input
                      type="text"
                      name="aadhar"
                      id="aadhar"
                      className=" bg-white bg-opacity-0 text-xs w-full "
                      placeholder="aadhar of doctor"
                      value={data.data.aadhar}
                    />
                  </div>
                  <div className="w-full  text-xs flex flex-row justify-between m-2 rounded-lg">
                    <div className="w-3/4 mr-42 p-3 text-xs rounded-lg bg-white bg-opacity-20">
                      <label
                        htmlFor="gender"
                        className="placeholder:text-gray-300 font-semibold text-base"
                      >
                        Language
                      </label>
                      <select
                        id="gender"
                        className=" w-full flex-1 appearance-none bg-white bg-opacity-20 border-0 text-gray-800text-xs rounded-lg py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-100"
                      >
                        <option value="">language</option>
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
                    <div className=" flex flex-col justify-between rounded-lg ml-2 p-3 text-xs bg-white bg-opacity-20 w-1/4">
                      <label
                        htmlFor="2auth"
                        className="placeholder:text-gray-300 font-semibold text-base"
                      >
                        2auth
                      </label>
                      <button
                        type="button"
                        id="2auth"
                        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 rounded-full"
                      >
                        {data.data.auth == true ? <KeyOffIcon /> : <KeyIcon />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="pl-8 pr-8 pt-8 vbn">
            <h1 className="font-bold text-xl ml-4">Account & Details</h1>
            <div className="flex flex-row ml-4 h-screen mb-4 gap-8 mr-4">
              <div className="gap-8 flex flex-col w-1/2 h-12">
                <div className="w-full bg-slate-100 rounded-lg p-4 m-4 shadow-xl border pb-6">
                  <h2 className="font-bold text-base">Personal Details</h2>
                  <div className="w-full flex items-center justify-center break-inside-avoid-column">
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="flex justify-center item-center">
                          <div className="p-3  rounded-full bg-slate-200 ">
                            {/* <img src={patient.image} alt="Patient" className="cover" /> */}
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png"
                              alt="doctor"
                              className="cover"
                            />
                          </div>
                        </div>
                        <p className="opacity-80 text-center text-base">
                          Doctor Profile
                        </p>
                      </div>
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="w-full p-3 text-xs rounded-lg bg-slate-200 m-2">
                          <label
                            htmlFor="firstName"
                            className="placeholder:text-gray-300 font-semibold text-base"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className=" bg-white bg-opacity-0 text-xs w-full"
                            placeholder="first name of doctor"
                            value={data.data.firstName}
                          />
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="w-full p-3 text-xs rounded-lg bg-slate-200 m-2">
                            <label
                              htmlFor="lastName"
                              className="placeholder:text-gray-300 font-semibold text-base"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              className=" bg-white bg-opacity-0 text-xs w-full"
                              placeholder="first name of doctor"
                              value={data.data.lastName}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  bg-slate-100 rounded-lg p-4 m-4 shadow-xl border pb-6">
                  <h2 className="font-bold text-base">Contact Details</h2>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-4/6 p-3 text-xs rounded-lg bg-slate-200 m-2">
                      <label
                        htmlFor="phone"
                        className="placeholder:text-gray-300 font-semibold text-base"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className=" bg-white bg-opacity-0 text-xs w-full"
                        placeholder="phone number of doctor"
                        value={data.data.phone}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-8 flex flex-col w-1/2 h-12">
                <div className=" w-full  bg-slate-100 rounded-lg p-4 m-4 shadow-xl border pb-6 mr-2 flex flex-col gap-8">
                  <h2 className="font-bold text-base">Other Details</h2>
                  <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
                    <label
                      htmlFor="license"
                      className="placeholder:text-gray-300 font-semibold text-base"
                    >
                      {" "}
                      License Number
                    </label>
                    <input
                      type="text"
                      name="license"
                      id="license"
                      className=" bg-white bg-opacity-0 text-xs w-full "
                      placeholder="license of doctor"
                      value={data.data.license}
                    />
                  </div>
                  <div className="flex flex-col gap-10 m-4">
                    <div className="w-4/6 p-3 text-xs rounded-lg bg-slate-200">
                      <label
                        htmlFor="gender"
                        className="placeholder:text-gray-300 font-semibold text-base"
                      >
                        Language
                      </label>
                      <select
                        id="gender"
                        className="flex-1 appearance-none bg-slate-200 border-0 text-gray-300 text-xs rounded-lg py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-100"
                      >
                        <option value="">language</option>
                        <option
                          value="en"
                          className="text-gray-800"
                          selected={data.data.language === "en"}
                        >
                          English
                        </option>
                        <option
                          value="hi"
                          className="text-gray-800"
                          selected={data.data.language === "hi"}
                        >
                          हिंदी
                        </option>
                        <option
                          value="bn"
                          className="text-gray-800"
                          selected={data.data.language === "bn"}
                        >
                          বাংলা
                        </option>
                        <option
                          value="mr"
                          className="text-gray-800"
                          selected={data.data.language === "mr"}
                        >
                          मराठी
                        </option>
                        <option
                          value="te"
                          className="text-gray-800"
                          selected={data.data.language === "ente"}
                        >
                          తెలుగు
                        </option>
                      </select>
                    </div>
                    <div className="w-4/6 p-3 text-xs rounded-lg bg-slate-200">
                      <label
                        htmlFor="aadhar"
                        className="placeholder:text-gray-300 font-semibold text-base"
                      >
                        {" "}
                        Aadhar Card
                      </label>
                      <input
                        type="text"
                        name="aadhar"
                        id="aadhar"
                        className=" bg-white bg-opacity-0 text-xs w-full "
                        placeholder="aadhar of doctor"
                        value={data.data.aadhar}
                      />
                    </div>
                  </div>
                  <div className="w-2/5	m-4 flex flex-row justify-between rounded-lg p-3 text-xs bg-slate-200 ">
                    <label
                      htmlFor="2auth"
                      className="placeholder:text-gray-300 font-semibold text-base"
                    >
                      2auth
                    </label>
                    <button
                      type="button"
                      id="2auth"
                      className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 rounded-full"
                    >
                      <KeyOffIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
