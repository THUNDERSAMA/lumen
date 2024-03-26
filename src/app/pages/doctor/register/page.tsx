"use client";
import { getTranslation } from "@/app/utils/TranslationUtils";
import { useState } from "react";
import Cookies from "js-cookie";
import { Providers } from "@/app/Providers";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/utils/store";
import Translate from "@/app/Translate";

export default function DoctorReg() {
  return (
    <>
      <Providers>
        <App />
      </Providers>
    </>
  );
}

function App() {
  const language = useSelector((state: RootState) => state.language.value);
  // const [language, setLanguage] = useState<string>(lang || "en");
  console.log(language);
  return (
    <>
      <main className=" text-white bg-orange-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <div className=" w-80">
          <h1 className="font-semibold text-2xl">
            <Translate>Register as a doctor</Translate>
          </h1>
          <span className="text-xs opacity-80">
            <Translate>make sure your details are correct!</Translate>
          </span>
        </div>
        <form
          action=""
          className="w-80 flex flex-col gap-1 text-white font-medium"
        >
          <div className="flex flex-row justify-between">
            <input
              type="text"
              id="first-name"
              placeholder={getTranslation("First name", language)}
              className=" w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
            <input
              type="text"
              id="last-name"
              placeholder={getTranslation("Last name", language)}
              className=" w-[calc(60%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-slate-300"
            />
          </div>
          <input
            type="phone"
            id="phone"
            placeholder={getTranslation("Phone", language)}
            className="p-3 mt-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-slate-300"
          />
          <input
            type="text"
            id="aadhar"
            placeholder={getTranslation("Aadhar", language)}
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-slate-300"
          />
          <input
            type="text"
            id="license-number"
            placeholder={getTranslation("License number", language)}
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-slate-300"
          />
          <input
            type="password"
            id="password"
            placeholder={getTranslation("Password", language)}
            className="p-3 mt-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-slate-300"
          />
          <input
            type="password"
            id="confirm-password"
            placeholder={getTranslation("Confirm password", language)}
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-slate-300"
          />
          <button
            type="submit"
            className=" mt-4 text-center text-xs w-full text-black bg-white font-semibold p-3 rounded-full"
          >
            Register
          </button>
        </form>
      </main>
    </>
  );
}
