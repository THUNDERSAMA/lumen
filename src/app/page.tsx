"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { getTranslation } from "./utils/TranslationUtils";
export default function Home() {
  const [isChecked, setIsChecked] = useState<boolean>();
  const [language, setLanguage] = useState("bn"); //Language is  initially Bengali.
  const userType = isChecked ? "patient" : "doctor";
  return (
    <main className=" bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center text-white">
      <h1 className=" font-bold text-6xl drop-shadow-xl">LUMEN</h1>

      <form>
        <div className="flex items-center gap-2">
          <label
            htmlFor="tog"
            onClick={() => setIsChecked(true)}
            className="leading-none select-none cursor-pointer"
          >
            {getTranslation("Doctor", language)}
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
            {getTranslation("Patient", language)}
          </label>
        </div>
      </form>

      <div className=" w-40 flex flex-col justify-center items-center">
        <Link
          href={`/${userType}/register`}
          className=" text-center text-xs w-full text-black bg-white font-semibold p-2 rounded-full outline-black outline outline-2"
        >
          {getTranslation("Register", language)}
        </Link>
        <span className=" text-xs text-opacity-70 my-1">
          {getTranslation("or", language)}
        </span>
        <Link
          href={`/${userType}/login`}
          className=" text-center text-xs w-full text-black bg-white font-semibold p-2 rounded-full outline-black outline outline-2"
        >
          {getTranslation("Login", language)}
        </Link>
      </div>
    </main>
  );
}
