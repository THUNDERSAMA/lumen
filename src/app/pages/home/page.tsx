"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { getTranslation } from "../../utils/TranslationUtils";
import React from "react";
import Dropdown from "../../components/Dropdown";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { updateByValue } from "../../utils/slices/LanguageState";
import type { RootState } from "../../utils/store";
import { Providers } from "../../Providers";
import Translate from "../../Translate";
import { updateUser } from "@/app/utils/slices/UserState";

export default function Home() {
  return (
    <>
      <Providers>
        <App />
      </Providers>
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);
  const user = useSelector((state: RootState) => state.user.value);
  console.log(language);
  const check = Cookies.get("user") === "doctor";
  const [isChecked, setIsChecked] = useState<boolean>(check);
  // dispatch(updateUser(!isChecked ? "doctor" : "patient"));
  console.log(Cookies.get("language"), " dispatch");

  // const userType = isChecked ? "patient" : "doctor";
  useEffect(() => {
    if (isChecked) {
      dispatch(updateUser("patient"));
    } else {
      dispatch(updateUser("doctor"));
    }
  }, [isChecked, dispatch]);

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
    Cookies.set("language", item.value);
    console.log(Cookies.get("language"), "value cookie updated");
  };

  return (
    <main
      className={`
      mainMain
      h-svh w-screen flex gap-10 flex-col justify-center items-center text-black`}
    >
      {/* <main
      className={`
      ${user.primaryColor} 
      h-svh w-screen flex gap-10 flex-col justify-center items-center text-white`}
    > */}
      <h1 className="font-bold text-7xl drop-shadow-xl">
        <Translate>LUMEN</Translate>
      </h1>

      <form>
        <div className="flex items-center justify-center gap-4">
          <label
            htmlFor="tog"
            onClick={() => setIsChecked(false)}
            className="leading-none select-none cursor-pointer"
          >
            <Translate>Doctor</Translate>
          </label>
          {/* <Switch.Root
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked)}
            className="w-[42px] h-[25px] rounded-full relative shadow-[0_2px_10px bg-black outline-none cursor-pointer"
            id="tog"
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root> */}
          <div
            onClick={() => setIsChecked(!isChecked)}
            className={`sWitch h-8 w-12 outline outline-2 outline-black rounded-full cursor-pointer flex items-center ${
              isChecked
                ? "after:bg-purple-700 after:left-5"
                : "after:bg-orange-700 after:left-1"
            }`}
          />
          <label
            htmlFor="tog"
            onClick={() => setIsChecked(true)}
            className="leading-none select-none cursor-pointer"
          >
            <Translate>Patient</Translate>
          </label>
        </div>
      </form>

      <div className=" w-40 flex flex-col gap-1 justify-center items-center">
        <Link
          href={`/${user.userType}/register`}
          className="bg-white hover:bg-black hover:text-white text-center w-full text-black font-semibold p-[10px] rounded-full border-[1px] border-black"
        >
          <Translate>Register</Translate>
        </Link>
        <Link
          href={`/${user.userType}/login`}
          className="bg-white hover:bg-black hover:text-white text-center w-full text-black font-semibold p-[10px] rounded-full border-[1px] border-black"
        >
          <Translate>Log In</Translate>
        </Link>
        {/* <Link
          href={`/${user.userType}/profile`}
          className="bg-transparent text-center w-full text-black font-semibold p-[10px] rounded-full border-[1px] border-black"
        >
          <Translate>Profile</Translate>
        </Link> */}
      </div>
      <Dropdown items={items} checked={isChecked} onSelect={handleSelect} />
    </main>
  );
}
