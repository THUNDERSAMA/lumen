"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { getTranslation } from "./utils/TranslationUtils";
import React from "react";
import Dropdown from "./components/Dropdown";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { updateByValue } from "./utils/slices/LanguageState";
import type { RootState } from "./utils/store";
import { Providers } from "./Provider";
import Translate from "./Translate";

function App() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);

  console.log(language);
  const [isChecked, setIsChecked] = useState<boolean>();

  // const [language, setLanguage] = useState<string>(
  //   Cookies.get("language") || "en"
  // );

  // useEffect(() => {
  //   console.log(language, "setting cookie value");
  //   Cookies.set("language", language);

  //   const cookieLanguage = Cookies.get("language");
  //   console.log(cookieLanguage, "valll");
  //   if (
  //     (cookieLanguage && cookieLanguage !== language && language == "en") ||
  //     (cookieLanguage && cookieLanguage !== language)
  //   ) {
  //     setLanguage(cookieLanguage);
  //   }
  // }, [language]);

  // if (
  //   (Cookies.get("language") && Cookies.get("language") !== language) ||
  //   language === "en"
  //   // (Cookies.get("language") &&
  //   //   Cookies.get("language") == "en" &&
  //   //   language === "en")
  // ) {
  //   setLanguage(Cookies.get("language") as string);
  // }
  // console.log(Cookies.get("language"));
  const userType = isChecked ? "patient" : "doctor";
  const items = [
    { label: "English", value: "en" },
    { label: "हिंदी", value: "hi" },
    { label: "বাংলা", value: "bn" },
    { label: "मराठी", value: "mr" },
    { label: "తెలుగు", value: "te" },
  ];
  const handleSelect = (item: any) => {
    // setLanguage(item.value);
    dispatch(updateByValue(item.value));
    // Cookies.set("language", item.value);
  };

  return (
    <main
      className={`${
        isChecked ? "bg-purple-700" : "bg-orange-700"
      } h-svh w-screen flex gap-10 flex-col justify-center items-center text-white`}
    >
      <h1 className=" font-bold text-6xl drop-shadow-xl">LUMEN</h1>

      <form>
        <div className="flex items-center gap-2">
          <label
            htmlFor="tog"
            onClick={() => setIsChecked(true)}
            className="leading-none select-none cursor-pointer"
          >
            <Translate>Doctor</Translate>
          </label>
          <Switch.Root
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked)}
            className="w-[42px] h-[25px] rounded-full relative shadow-[0_2px_10px bg-black outline-none cursor-pointer"
            id="tog"
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
          <label
            htmlFor="tog"
            onClick={() => setIsChecked(false)}
            className="leading-none select-none cursor-pointer"
          >
            <Translate>Patient</Translate>
          </label>
        </div>
      </form>

      <div className=" w-40 flex flex-col justify-center items-center">
        <Link
          href={`/${userType}/register`}
          className=" text-center text-xs w-full text-black bg-white font-semibold p-2 rounded-full"
        >
          <Translate>Register</Translate>
        </Link>
        <span className=" text-xs text-opacity-70 my-1">
          <Translate>or</Translate>
        </span>
        <Link
          href={`/${userType}/login`}
          className=" text-center text-xs w-full text-black bg-white font-semibold p-2 rounded-full"
        >
          <Translate>Login</Translate>
        </Link>
      </div>
      <Dropdown items={items} checked={isChecked} onSelect={handleSelect} />
    </main>
  );
}
export default function Home() {
  return (
    <>
      <Providers>
        <App />
      </Providers>
    </>
  );
}
