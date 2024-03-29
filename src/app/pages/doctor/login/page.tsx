"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import { getTranslation } from "@/app/utils/TranslationUtils";
import Image from "next/image";
import { useState } from "react";

export default function DoctorLogin() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string | null>();

  const [eyeToggle, setEyeToggle] = useState<boolean>(false);

  function handleSubmit() {
    if (phone.trim() === "" || password.trim() === "") {
      setError("Please fill all the fields");
      return;
    }
    setError(null);
    console.log({
      phone: phone.trim(),
      password: password.trim(),
    });
  }
  return (
    <>
      <main className=" text-white bg-orange-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <p
          className={`py-1 px-2 text-[.8rem] font-normal text-white w-full text-center bg-red-600 flex items-center justify-center gap-1.5 shadow-md fixed ${
            error ? "top-0" : "top-[-30px]"
          }`}
        >
          <Image
            src={"/error_icon.svg"}
            height={12}
            width={12}
            alt="error"
            className="invert"
          />{" "}
          {error}
        </p>
        <div className=" w-80">
          <h1 className="font-semibold text-2xl">
            <Translate>Login as a doctor</Translate>
          </h1>
          <span className="text-xs opacity-80">
            <Translate>check your details before you login!</Translate>
          </span>
        </div>
        <form
          action=""
          className="w-80 flex flex-col gap-1 text-white font-medium"
        >
          <input
            type="number"
            pattern="\d*"
            inputMode="numeric"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={getTranslation("Phone")}
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <div className="flex items-center justify-end relative">
            <input
              type={eyeToggle ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
              placeholder={getTranslation("Password")}
              className="p-3 w-full text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
            <span
              className="bg-transparent h-10 aspect-square rounded-full grid place-content-center cursor-pointer absolute"
              onClick={() => setEyeToggle(!eyeToggle)}
            >
              <Image
                src={eyeToggle ? "/pass_open_icon.svg" : "/pass_close_icon.svg"}
                height={15}
                width={15}
                alt="password seen"
                className={`invert ${
                  password.length > 0 ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </div>
          <button
            type="submit"
            className="mt-4 bg-transparent text-white text-center text-xs px-6 w-fit hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <Translate>Log In</Translate>
          </button>
        </form>
      </main>
    </>
  );
}
