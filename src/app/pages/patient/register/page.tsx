"use client";
import { Providers } from "@/app/Providers";
import OneTimePass from "@/app/components/OneTimePass";
import { useState } from "react";

export default function PatientReg() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  const handleOTPClick = (toggle: boolean) => {
    setIsClicked(toggle);
  };
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      {isClicked && (
        <main className="grid place-content-center backdrop-blur-[50px] absolute z-10 w-svw h-svh text-white bg-black bg-opacity-0">
          <OneTimePass handleOTP={handleOTPClick} />
        </main>
      )}
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
          <button
            type="submit"
            className=" mt-4 text-center text-xs w-full text-black bg-white font-semibold p-3 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              handleOTPClick(true);
            }}
          >
            Request OTP
          </button>
        </form>
      </main>
    </>
  );
}
