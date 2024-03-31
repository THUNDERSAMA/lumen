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
  const [colorMode, setColorMode] = useState<boolean>(false); // true for dark and false for light
  // const [placeholderVisible, setPlaceholderVisible] = useState(true);
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
    // if (placeholderVisible && text.trim().length > 0) {
    //   setPlaceholderVisible(false);
    // } else if (!placeholderVisible && text.trim().length === 0) {
    //   setPlaceholderVisible(true);
    // }
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

  const currentBg = "bg-[rgb(0,_0,_0,_0.0)]";
  const previewBg = "bg-[rgb(0,_0,_0,_0.1)]";
  const currentText = "text-black";

  const hoverBg = "hover:bg-orange-100";
  const hoverText = "hover:text-black";

  return (
    <main
      className={`${
        colorMode ? "bg-black" : " bg-[rgb(0,_0,_0,_0)]"
      } p-4 h-svh w-screen flex gap-10 flex-col justify-center items-center relative ${
        error && "pt-7"
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
        />
        {error}
      </p>

      <form
        action=""
        className={`relative ${
          colorMode ? "text-white" : "text-black"
        } bg-transparent flex flex-col items-end mobile:w-full tablet:w-3/4 h-full`}
      >
        <input
          type="text"
          id="presText"
          required
          placeholder="Ask your patient for their Lumen ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          className={`px-3 py-2 text-sm mb-1 w-full rounded-full ${
            colorMode
              ? "bg-opacity-10 placeholder:text-zinc-700"
              : "bg-zinc-100 bg-opacity-100 placeholder:text-black placeholder:text-opacity-40"
          }`}
        />
        <div
          className={`${
            colorMode ? "bg-orange-900" : "bg-white"
          } w-full flex items-start justify-center`}
        >
          <button
            className={`${
              colorMode ? "bg-orange-900" : currentBg + " hover:bg-orange-200"
            } p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
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
              className={""}
            />
          </button>
          <button
            className={`${
              colorMode ? "bg-orange-900" : currentBg + " hover:bg-orange-200"
            } h-[30px] rounded-full text-xs text-black hover:text-black aspect-square`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("bold");
            }}
          >
            B
          </button>
          <button
            className={`${
              colorMode ? "bg-orange-900" : currentBg + " hover:bg-orange-200"
            } h-[30px] rounded-full text-xs text-black hover:text-black aspect-square`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("underline");
            }}
          >
            U
          </button>
          <button
            className={`${
              colorMode ? "bg-orange-900" : currentBg + " hover:bg-orange-200"
            } h-[30px] rounded-full text-xs text-black hover:text-black aspect-square`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("italic");
            }}
          >
            I
          </button>
        </div>
        <div
          id="prescription"
          spellCheck="false"
          onInput={getTextContent}
          ref={myDivRef}
          data-placeholder="\A Today's Prescription:"
          className={`EDITOR mb-2 outline-0 p-2 px-3 h-full w-full text-sm bg-white ${
            colorMode
              ? "bg-opacity-10 text-zinc-700"
              : `bg-opacity-100 ${
                  presc.length === 0 && "text-slate-500 text-opacity-50"
                }`
          } resize-none overflow-y-auto`}
        />
        <button
          type="submit"
          className={`${
            colorMode
              ? "bg-orange-900"
              : "bg-orange-500" + " hover:bg-orange-700 hover:text-white"
          } text-white text-opacity-90 text-center text-xs w-[7rem] h-[40px] font-semibold p-[10px] px-4 rounded-full`}
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          Preview
        </button>
      </form>
    </main>
  );
}
