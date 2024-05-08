"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import { getTranslation } from "@/app/utils/TranslationUtils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";

export default function DoctorProfile() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

const App = () => {
  // const [doctor, setDoctor] = useState(null);

  // useEffect(() => {
  //   const fetchPatient = async () => {
  //     try {
  //       const response = await axios.get("/api/doctors/profile");
  //       setDoctor(response.data);
  //     } catch (error) {
  //       console.error("Error fetching doctor profile:", error);
  //     }
  //   };

  //   fetchDoctor();
  // }, []);

  // if (!doctor) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="bg-slate-100 p-4">
      <h1 className="font-bold">Account & Details</h1>
      <div className="columns-2xs">
        <div className="w-full aspect-auto bg-slate-200 rounded-lg p-4 m-4 shadow-xl shadow-inner border-4 border-indigo-200 border-r-indigo-500">
          <h2 className="font-bold">Personal Details</h2>
          <div className="w-full h-full flex items-center justify-center">
            <div>
              <div className="flex justify-center item-center">
                <div className="w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 ">
                  {/* <img src={patient.image} alt="Patient" className="cover" /> */}
                  <img src="/demo.img" alt="patient" className="cover" />
                </div>
              </div>
              <h6 className="font-semibold text-l text-center">
                {/* {doctor.firstName} {doctor.lastName} */}
                firstName lastName
              </h6>
              <p className="text-xs opacity-80 text-center">Patient Profile</p>
            </div>
          </div>
        </div>

        <div className="w-full aspect-auto bg-slate-200 rounded-lg p-4 m-4 shadow-xl shadow-inner border-4 border-indigo-200 border-r-indigo-500">
          <h2 className="font-bold">Contact Details</h2>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
              <label
                htmlFor="phone"
                className="placeholder:text-gray-300 font-semibold"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className=" bg-white bg-opacity-0 text-xs w-full"
                placeholder="phone number of doctor"
              />
            </div>
          </div>
        </div>
        <div className="w-full aspect-auto bg-slate-200 rounded-lg p-4 m-4 shadow-xl shadow-inner border-4 border-indigo-200 border-r-indigo-500 mr-2">
          <h2 className="font-bold">Other Details</h2>
          <div className="w-full p-3 text-xs rounded-lg bg-white bg-opacity-20 m-2">
            <label
              htmlFor="lisence"
              className="placeholder:text-gray-300 font-semibold"
            >
              Lisence Number
            </label>
            <input
              type="text"
              name="lisence"
              id="lisence"
              className=" bg-white bg-opacity-0 text-xs w-full"
              placeholder="lisence number of doctor"
            />
          </div>
          <div className="flex flex-row justify-between m-4">
            <div className="w-[calc(40%-0.1rem)] p-3 text-xs rounded-lg bg-white bg-opacity-20">
              <label
                htmlFor="gender"
                className="placeholder:text-gray-300 font-semibold"
              >
                Language
              </label>
              <select
                id="gender"
                className="flex-1 appearance-none bg-white bg-opacity-20 border-0 text-gray-300 text-xs rounded-lg py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-100"
              >
                <option value="">language</option>
                <option value="en" className="text-gray-800">
                  English
                </option>
                <option value="hi" className="text-gray-800">
                  हिंदी
                </option>
                <option value="bn" className="text-gray-800">
                  বাংলা
                </option>
                <option value="mr" className="text-gray-800">
                  मराठी
                </option>
                <option value="te" className="text-gray-800">
                  తెలుగు
                </option>
              </select>
            </div>
            <div className="w-[calc(60%-0.1rem)] p-3 text-xs rounded-lg bg-white bg-opacity-20">
              <label
                htmlFor="aadhar"
                className="placeholder:text-gray-300 font-semibold"
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
              />
            </div>
          </div>
          <div className="m-4 flex flex-row justify-between rounded-lg p-3 text-xs rounded-full bg-white bg-opacity-20 w-full">
            <label
              htmlFor="2auth"
              className="placeholder:text-gray-300 font-semibold"
            >
              2auth
            </label>
            <button
              type="button"
              id="2auth"
              className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-3 h-3 text-white me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              2auth
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
