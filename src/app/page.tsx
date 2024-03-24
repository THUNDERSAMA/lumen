"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
export default function Home() {
  const [isChecked, setIsChecked] = useState<boolean>();
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
            Doctor
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
            Patient
          </label>
        </div>
      </form>

      <div className=" w-40 flex flex-col justify-center items-center">
        <Link
          href={`pages/${userType}/register`}
          className=" text-center text-xs w-full text-black bg-white font-semibold p-2 rounded-full outline-black outline outline-2"
        >
          Register
        </Link>
        <span className=" text-xs text-opacity-70 my-1">or</span>
        <Link
          href={`pages/${userType}/login`}
          className=" text-center text-xs w-full text-black bg-white font-semibold p-2 rounded-full outline-black outline outline-2"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
