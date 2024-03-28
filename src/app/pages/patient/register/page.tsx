"use client";
import { Providers } from "@/app/Providers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";

export default function PatientReg() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [aadhar, setAadhar] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [error, setError] = useState<string | null>("");

  const [eyeToggle, setEyeToggle] = useState<boolean>(false);
  const [conEyeToggle, setConEyeToggle] = useState<boolean>(false);

  const router = useRouter();
  function handleSubmit() {
    if (
      firstName.trim() === "" ||
      phone.trim() === "" ||
      aadhar.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(null);
    router.push("/pages/otp");
    console.log({
      name: (firstName.trim() + " " + lastName.trim()).trim(),
      phone: phone.trim(),
      aadhar: aadhar.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    });
  }

  return (
    <>
      <main className=" text-white bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <p
          className={`py-1 px-2 text-[.8rem] font-normal text-white w-full text-center bg-red-600 flex items-center justify-center gap-1.5 fixed ${
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className=" w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className=" w-[calc(60%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
          </div>
          <input
            type="number"
            pattern="\d*"
            inputMode="numeric"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="p-3 mt-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <input
            type="number"
            pattern="\d*"
            inputMode="numeric"
            id="aadhar"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            placeholder="Aadhar"
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <div className="mt-4 flex items-center justify-end relative">
            <input
              type={eyeToggle ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
              placeholder="Password"
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
          <div className="flex items-center justify-end relative">
            <input
              type={conEyeToggle ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value.trim());
              }}
              placeholder="Confirm Password"
              className="p-3 w-full text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
            <span
              className="bg-transparent h-10 aspect-square rounded-full grid place-content-center cursor-pointer absolute"
              onClick={() => setConEyeToggle(!conEyeToggle)}
            >
              <Image
                src={
                  conEyeToggle ? "/pass_open_icon.svg" : "/pass_close_icon.svg"
                }
                height={15}
                width={15}
                alt="password seen"
                className={`invert ${
                  confirmPassword.length > 0 ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </div>

          <button
            type="submit"
            className=" mt-4 bg-transparent text-white text-center text-xs w-2/5 hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            Request OTP
          </button>
        </form>
      </main>
    </>
  );
}
