"use client";
import { Providers } from "@/app/Providers";
import type { RootState } from "@/app/utils/store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import $ from "jquery";
import EditorHint from "@/app/components/EditorHint";

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
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const [hintList, setHintList] = useState<string[]>([
    "Suggestions",
    "Will Appear",
    "For The Doctors",
  ]);
  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.contentEditable = "true";
    }
  }, []);

  const getTextContent = () => {
    const text = contentEditableRef.current?.innerHTML || "";
    setPresc(text);
    console.log(text);
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

  const [caretPosition, setCaretPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleCaretPosition = () => {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        // const range = selection.getRangeAt(0);
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setCaretPosition({ top: rect.top, left: rect.left });
      }
    };
    const contentEditable = contentEditableRef.current;
    if (contentEditable) {
      contentEditable.addEventListener("mouseup", handleCaretPosition);
      contentEditable.addEventListener("keyup", handleCaretPosition);
      return () => {
        contentEditable.removeEventListener("mouseup", handleCaretPosition);
        contentEditable.removeEventListener("keyup", handleCaretPosition);
      };
    }
  }, []);
  console.log(caretPosition);
  return (
    <main
      className={`relative overflow-hidden ${
        colorMode ? "bg-black" : " bg-[rgb(0,_0,_0,_0)]"
      } p-4 w-screen h-svh flex flex-col gap-5 items-center ${error && "pt-7"}`}
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
      <div className="w-full flex gap-1 mobile:flex-col tablet:flex-row tablet:items-center mobile:items-start">
        <input
          type="text"
          id="presText"
          required
          placeholder="Ask your patient for their Lumen ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          className={`px-2 py-[5px] text-sm mobile:w-full tablet:min-w-[250px] leading-[30px] rounded-full placeholder:text-sm ${
            colorMode
              ? "bg-zinc-900 bg-opacity-60 placeholder:text-zinc-600 placeholder:text-opacity-90"
              : "bg-zinc-100 bg-opacity-100 placeholder:text-black placeholder:text-opacity-50"
          }`}
        />
        <div
          className={`${
            colorMode
              ? "bg-zinc-900 bg-opacity-60"
              : "bg-zinc-100 bg-opacity-100"
          } p-[5px] rounded-full w-fit flex items-start justify-center`}
        >
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              setColorMode(!colorMode);
            }}
          >
            <Image
              src={colorMode ? "/dark_icon.svg" : "/light_icon.svg"}
              height={colorMode ? 12 : 20}
              width={colorMode ? 12 : 20}
              alt="dark mode"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("bold");
            }}
          >
            <Image
              src={"/bold_icon.svg"}
              height={11}
              width={11}
              alt="bold"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("underline");
            }}
          >
            <Image
              src={"/underline_icon.svg"}
              height={12}
              width={12}
              alt="underline"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("italic");
            }}
          >
            <Image
              src={"/italic_icon.svg"}
              height={12}
              width={12}
              alt="italic"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("justifyleft");
            }}
          >
            <Image
              src={"/justify_both_icon.svg"}
              height={20}
              width={20}
              alt="justify left"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("justifycenter");
            }}
          >
            <Image
              src={"/justify_center_icon.svg"}
              height={13}
              width={13}
              alt="justify center"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("justifyright");
            }}
          >
            <Image
              src={"/justify_both_icon.svg"}
              height={20}
              width={20}
              alt="justify right"
              className={`transition-none rotate-180 ${colorMode && "invert"}`}
            />
          </button>
          <button
            className={`${
              colorMode ? "hover:bg-orange-500" : "hover:bg-orange-200"
            } bg-transparent p-2 rounded-full h-[30px] aspect-square grid place-content-center`}
            onClick={(event) => {
              event.preventDefault();
              document.execCommand("justifyfull");
            }}
          >
            <Image
              src={"/justify_full_icon.svg"}
              height={12}
              width={12}
              alt="justify full"
              className={`transition-none ${colorMode && "invert"}`}
            />
          </button>
        </div>
      </div>

      <form
        action=""
        className={`${
          colorMode ? "text-white" : "text-black"
        } bg-transparent flex flex-col items-end mobile:w-full tablet:w-4/5 h-full mobile:max-h-[calc(100%-(2*40px+20px))] tablet:max-h-[calc(100%-40px-20px)]`}
      >
        <div
          id="prescription"
          spellCheck="false"
          onInput={getTextContent}
          ref={contentEditableRef}
          data-placeholder="Today's Prescription:"
          className={`mb-2 outline-0 p-2 px-3 h-full w-full text-sm bg-transparent ${
            colorMode
              ? `editorDark ${
                  presc.length === 0 && "text-zinc-500 text-opacity-50"
                }`
              : `editorLight ${
                  presc.length === 0 && "text-zinc-500 text-opacity-50"
                }`
          } overflow-y-auto transition-none`}
        />
        <button
          type="submit"
          className={`${
            colorMode
              ? "bg-transparent border-2 border-white hover:bg-orange-500 hover:border-transparent"
              : "bg-orange-500 border-2 border-transparent hover:bg-orange-700"
          } text-white text-opacity-90 text-center text-xs w-[7rem] h-[40px] font-semibold px-4 py-2 rounded-full`}
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          Preview
        </button>
      </form>
      <EditorHint
        hintList={hintList}
        colorMode={colorMode}
        caretPosition={caretPosition}
      />
    </main>
  );
}
