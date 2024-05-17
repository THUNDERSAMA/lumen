"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import Notification from "@/app/components/Notification";
import { getTranslation } from "@/app/utils/TranslationUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function PatientLogin() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string | null>(null);

  const [eyeToggle, setEyeToggle] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit() {
    if (phone.trim() === "" || password.trim() === "") {
      setError("Please fill all the fields");
      return;
    }
    setError(null);
    const response = await fetch("/api/patient_signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone.trim(),
        password: password.trim(),
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Failed to login");
    } else if (data.stattus == 400) {
      setError(data.message);
    } else if (data.stattus == 600) {
      router.push(`/patient/choose-account?data=${data.message}`);
    } else if (data.stattus == 500) {
      setError(data.message);
    } else {
      router.push(`/patient/main`);
    }

    console.log({
      phone: phone.trim(),
      password: password.trim(),
    });
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
      <main className="text-black h-svh w-screen flex flex-col justify-center items-center">
        <section className="flex flex-col gap-20 w-96 max-w-[90vw]">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-bold text-4xl">
              <Translate>Login as a patient</Translate>
            </h1>
            <span className="opacity-50">
              <Translate>check your details before you login!</Translate>
            </span>
          </div>
          <form action="" className="w-full flex flex-col font-medium">
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
            <div className="flex items-center justify-end relative">
              <input
                type={eyeToggle ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                }}
                placeholder={getTranslation("Password")}
                className="p-4 border-[1px] border-black w-full rounded-b-3xl bg-white"
              />
              <span
                className="absolute right-3 h-10 aspect-square rounded-full grid place-content-center cursor-pointer"
                onClick={() => setEyeToggle(!eyeToggle)}
              >
                <Image
                  src={
                    eyeToggle ? "/pass_open_icon.svg" : "/pass_close_icon.svg"
                  }
                  height={20}
                  width={20}
                  alt="password seen"
                  className={`${
                    password.length > 0 ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </div>
            <div className="flex justify-end py-4 pr-1">
              <button
                type="submit"
                className=""
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                {/* <Translate>Log In</Translate> */}
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
