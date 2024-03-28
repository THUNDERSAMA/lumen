"use client";
import { Providers } from "@/app/Providers";
import Link from "next/link";
import { useState } from "react";

export default function PatientReg() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  return (
    <>
      <main className=" text-white bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <div className=" w-80">
          <h1 className="font-semibold text-2xl">Register as a patient</h1>
          <span className="text-xs opacity-80">
            make sure your details are correct!
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
              placeholder="First name"
              className=" w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
            <input
              type="text"
              id="last-name"
              placeholder="Last name"
              className=" w-[calc(60%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
          </div>
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            className="p-3 mt-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <input
            type="phone"
            id="phone"
            placeholder="Aadhar"
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-3 mt-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <Link
            className=" mt-4 bg-transparent text-white text-center text-xs w-2/5 hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
            href={"/pages/otp"}
          >
            Request OTP
          </Link>
        </form>
      </main>
    </>
  );
}
