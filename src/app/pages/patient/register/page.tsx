"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import { getTranslation } from "@/app/utils/TranslationUtils";
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
  async function handleSubmit() {
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
    router.push("/patient/otp");

    console.log({
      name: (firstName.trim() + " " + lastName.trim()).trim(),
      phone: phone.trim(),
      aadhar: aadhar.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    });
    try {
      const response = await fetch("http://localhost:3000/api/patient_signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          aadhar: aadhar.trim(),
          phone: phone.trim(),
          password: password.trim(),
          confirmPassword: confirmPassword.trim(),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      } else if (response.status == 409) {
        // setError("User already exists");
        throw new Error("User Already Exists");
      }

      const data = await response.json();
      console.log(data);
      router.push("/pages/otp");
    } catch (error) {
      setError("Failed to login");
      console.error("Error:", error);
    }
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
          <h1 className="font-semibold text-2xl">
            <Translate>Register as a patient</Translate>
          </h1>
          <span className="text-xs opacity-80">
            <Translate>make sure your details are correct!</Translate>
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
              placeholder={getTranslation("First name")}
              className=" w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
            />
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={getTranslation("Last name")}
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
            placeholder={getTranslation("Phone")}
            className="p-3 mt-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <input
            type="number"
            pattern="\d*"
            inputMode="numeric"
            id="aadhar"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            placeholder={getTranslation("Aadhar")}
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
          <div className="flex items-center justify-end relative">
            <input
              type={conEyeToggle ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value.trim());
              }}
              placeholder={getTranslation("Confirm Password")}
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
            className=" mt-4 bg-transparent text-white text-center text-xs px-6 w-fit hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <Translate>Request OTP</Translate>
          </button>
        </form>
      </main>
    </>
  );
}
