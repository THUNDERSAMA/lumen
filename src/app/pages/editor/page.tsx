"use client";
import { Providers } from "@/app/Providers";
import type { RootState } from "@/app/utils/store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Editor() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  const language = useSelector((state: RootState) => state.language.value);

  const [patientID, setPatientID] = useState<string>("");
  const [presc, setPresc] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [colorMode, setColorMode] = useState<boolean>(true);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const myDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (myDivRef.current) {
      myDivRef.current.contentEditable = "true";
    }
  }, []);

  const getTextContent = () => {
    const text = myDivRef.current?.innerHTML || "";
    setPresc(text);
    console.log(text);
    if (placeholderVisible && text.trim().length > 0) {
      setPlaceholderVisible(false);
    } else if (!placeholderVisible && text.trim().length === 0) {
      setPlaceholderVisible(true);
    }
  };

  function handleSubmit() {
    if (patientID.trim() === "") {
      setError("Please fill the patient ID");
      return;
    }
    if (presc.trim() === "") {
      setError("An empty prescription won't help anyone");
      return;
    }
  }

  return (
    <main
      className={`${
        colorMode ? "bg-black" : " bg-orange-700"
      } py-2 h-svh w-screen flex gap-10 flex-col justify-center items-center relative ${
        error && "mobile:pt-7 tablet:pt-0 desktop:pt-0"
      }`}
    >
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

      <form
        action=""
        className={`${
          colorMode ? "text-white" : "text-black"
        } bg-transparent p-3 flex flex-col mobile:w-full mobile:rounded-none mobile:h-full tablet:w-[70%] tablet:h-[90%] tablet:rounded-lg desktop:w-1/2 desktop:h-3/4 desktop:rounded-lg h-[90%]`}
      >
        <input
          type="text"
          id="presText"
          required
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          className={`rounded-2xl p-2 px-3 bg-white ${
            colorMode
              ? "bg-opacity-10 placeholder:text-zinc-700"
              : "bg-opacity-80 placeholder:text-orange-700 placeholder:text-opacity-50"
          }`}
        />
        <p
          className={`text-[12px] text-end font-normal ${
            colorMode ? "text-zinc-500" : "text-white"
          } text-opacity-70 px-2 mt-0.5`}
        >
          Ask your patient for their Lumen ID
        </p>
        <div
          id="prescription"
          spellCheck="false"
          onInput={getTextContent}
          ref={myDivRef}
          className={`mt-2 rounded-2xl p-2 px-3 h-full font-light text-sm bg-white ${
            colorMode
              ? "bg-opacity-10 placeholder:text-zinc-700"
              : "bg-opacity-80 placeholder:text-orange-700 placeholder:text-opacity-50"
          } placeholder:text-gray-500 resize-none`}
        >
          {placeholderVisible && (
            <div
              style={{ color: "rgb(0 0 0 / 58%)" }}
              className="text-lg font-mono"
            >
              <h1>Welcome to the Prescription Lumen editor</h1>
              <p>Your trusted companion in the noble art of healing! 🩺✨</p>
              <h2>Today`&apos`s Prescription:</h2>
              <ul>
                <li>
                  <strong>Patient:</strong> [Patient Name]
                </li>
                <li>
                  <strong>Diagnosis:</strong> [Diagnosis Here]
                </li>
                <li>
                  <strong>Medication:</strong> [Medication Name and Dosage]
                </li>
                <li>
                  <strong>Instructions:</strong> [Administration Instructions]
                </li>
                <li>
                  <strong>Additional Notes:</strong> [Any Additional Notes]
                </li>
              </ul>
              <p>
                Remember, a spoonful of humor can be the best medicine! Feel
                free to add your personal touch . 😉
              </p>

              <p>
                Thank you for choosing Prescription Lumen editor. Wishing you
                and your patients a speedy recovery!
              </p>
            </div>
          )}
        </div>
        <div className="mt-4 flex gap-1 items-start justify-end">
          <button
            className={`border-[2px] p-2 rounded-full h-[40px] aspect-square hover:invert hover:bg-black hover:border-transparent`}
            onClick={(event) => {
              event.preventDefault();
              setColorMode(!colorMode);
            }}
          >
            <Image
              src={!colorMode ? "/light_icon.svg" : "/dark_icon.svg"}
              height={20}
              width={20}
              alt="light mode"
              className={"invert"}
            />
          </button>
          <button
            className={`border-[2px] h-[40px] rounded-full text-white hover:bg-white hover:text-black hover:border-transparent aspect-square`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("bold");
              // getTextContent();
              // handleMakeBold();
            }}
          >
            B
          </button>
          <button
            className={`border-[2px] h-[40px] rounded-full text-white hover:bg-white hover:text-black hover:border-transparent aspect-square`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("underline");
              // getTextContent();
              // handleMakeBold();
            }}
          >
            U
          </button>
          <button
            className={`border-[2px] h-[40px] rounded-full text-white hover:bg-white hover:text-black hover:border-transparent aspect-square`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("italic");
              // getTextContent();
              // handleMakeBold();
            }}
          >
            I
          </button>
          <button
            type="submit"
            className="bg-transparent text-white text-center text-xs w-2/5 h-[40px] hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            Preview
          </button>
        </div>
      </form>
    </main>
  );
}
