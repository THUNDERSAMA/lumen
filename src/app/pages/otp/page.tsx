"use client";
import Link from "next/link";
import Translate from "@/app/Translate";
import React from "react";
import { Providers } from "@/app/Providers";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/utils/store";
//import { checkAuth } from "@/app/middleware/checkAuth";
import Cookies from "js-cookie";
//import { getSession } from "@/lib/auth";

export default function OneTimePass() {
  const router = useRouter();

  const session = Cookies.get("session");
  if (!session) {
    router.push("/home");
  }
  return (
    <Providers>
      <App />
    </Providers>
  );
}
async function App() {
  // const session = await getSession();
  // console.log(session);
  const user = useSelector((state: RootState) => state.user.value);
  const router = useRouter();
  return (
    <main
      className={`flex justify-center items-center backdrop-blur-[50px] w-svw h-svh text-white ${user.primaryColor}`}
    >
      <div className="w-fit">
        <h1 className="font-semibold text-2xl">
          <Translate>OTP is sent to your phone</Translate>
        </h1>
        <span className="text-xs opacity-80">
          <Translate>don&apos;t share it with anyone!</Translate>
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
            <Translate>Verify</Translate>
          </button>
          <span className="text-[10px] flex gap-1">
            <Translate>Didn&apos;t receive an OTP?</Translate>

            <button
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
              className="font-medium underline"
            >
              <Translate>Try again</Translate>
            </button>
          </span>
        </form>
      </div>
    </main>
  );
}
