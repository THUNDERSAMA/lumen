"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import Notification from "@/app/components/Notification";
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

  const [error, setError] = useState<string | null>(null);

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
    // router.push("/patient/otp");

    console.log({
      name: (firstName.trim() + " " + lastName.trim()).trim(),
      phone: phone.trim(),
      aadhar: aadhar.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    });
    try {
      const response = await fetch("/api/patient_signup", {
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
      const data = await response.json();
      console.log(data.stattus);
      if (!response.ok) {
        throw new Error("Failed to login");
      } else if (data.stattus == 409) {
        setError("User already exists");
        throw new Error(data.message);
      } else if (data.stattus == 200) {
        console.log(data);
        router.push("/patient/otp");
      } else {
        setError("Failed to login");
      }
    } catch (error) {
      setError("Failed to login");
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Notification
        message={error}
        setMessage={setError}
        time={5000}
        position="top"
        type="error"
      />
      <main className="text-black h-full py-8 min-h-screen w-screen flex gap-10 flex-col justify-center items-center">
        <section className="flex flex-col gap-20 w-96 max-w-[90vw]">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-bold text-4xl">
              <Translate>Register as a patient</Translate>
            </h1>
            <span className="opacity-50">
              <Translate>make sure your details are correct!</Translate>
            </span>
          </div>
          <form action="" className="w-full flex flex-col gap-2 font-medium">
            <div className="flex flex-row justify-between">
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={getTranslation("First name")}
                className="p-4 border-[1px] border-black w-full rounded-l-3xl bg-white"
              />
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={getTranslation("Last name")}
                className="p-4 border-[1px] border-black border-l-0 w-full rounded-r-3xl bg-white"
              />
            </div>
            <div>
              <input
                type="number"
                pattern="\d*"
                inputMode="numeric"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={getTranslation("Phone")}
                className="p-4 border-[1px] border-black border-b-0 w-full rounded-t-3xl bg-white"
              />
              <input
                type="number"
                pattern="\d*"
                inputMode="numeric"
                id="aadhar"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                placeholder={getTranslation("Aadhar")}
                className="p-4 border-[1px] border-black w-full rounded-b-3xl bg-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-end relative">
                <input
                  type={eyeToggle ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                  placeholder={getTranslation("Password")}
                  className="p-4 border-[1px] border-black border-b-0 w-full rounded-t-3xl bg-white"
                />
                <span
                  className="h-10 aspect-square rounded-full grid place-content-center cursor-pointer absolute right-3"
                  onClick={() => setEyeToggle(!eyeToggle)}
                >
                  <Image
                    src={
                      eyeToggle ? "/pass_open_icon.svg" : "/pass_close_icon.svg"
                    }
                    height={15}
                    width={15}
                    alt="password seen"
                    className={`${
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
                  className="p-4 border-[1px] border-black w-full rounded-b-3xl bg-white"
                />
                <span
                  className="h-10 aspect-square rounded-full grid place-content-center cursor-pointer absolute right-3"
                  onClick={() => setConEyeToggle(!conEyeToggle)}
                >
                  <Image
                    src={
                      conEyeToggle
                        ? "/pass_open_icon.svg"
                        : "/pass_close_icon.svg"
                    }
                    height={15}
                    width={15}
                    alt="password seen"
                    className={`${
                      confirmPassword.length > 0 ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-end py-2 pr-1">
              <button
                type="submit"
                className=""
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                {/* <Translate>Request OTP</Translate> */}
                <Image
                  src={"/arrow.png"}
                  height={50}
                  width={50}
                  alt="login"
                  className="rotate-180"
                />
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
