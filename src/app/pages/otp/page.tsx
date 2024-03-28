"use client";
import Link from "next/link";
import Translate from "@/app/Translate";
import React from "react";
import { Providers } from "@/app/Providers";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/utils/store";

export default function OneTimePass() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
function App() {
  const color = useSelector((state: RootState) => state.color.value);
  const router = useRouter();
  return (
    <main
      className={`grid place-content-center backdrop-blur-[50px] absolute z-10 w-svw h-svh text-white ${color.primary}`}
    >
      <div className="w-80">
        <h1 className="font-semibold text-2xl">
          <Translate>OTP is sent to your phone</Translate>
        </h1>
        <span className="text-xs opacity-80">
          <Translate>dont share it with anyone!</Translate>
        </span>
        <form action="" className="mt-4 flex flex-col items-start gap-5 w-80">
          <div className="w-full flex flex-row justify-evenly ">
            <input
              type="text"
              placeholder="_"
              className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
            />
            <input
              type="text"
              placeholder="_"
              className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
            />
            <input
              type="text"
              placeholder="_"
              className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
            />
            <input
              type="text"
              placeholder="_"
              className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
            />
            <input
              type="text"
              placeholder="_"
              className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
            />
            <input
              type="text"
              placeholder="_"
              className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
            />
          </div>
          <button
            type="submit"
            className="bg-transparent text-white text-center text-xs w-2/5 hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
          >
            Verify
          </button>
          <span className="text-[10px]">
            Didn&apos;t recieve an OTP?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
              className=" underline"
            >
              Try again
            </button>
          </span>
        </form>
      </div>
    </main>
  );
}
