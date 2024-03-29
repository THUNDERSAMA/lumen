"use client";
import { Providers } from "@/app/Providers";
import type { RootState } from "@/app/utils/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
// import $ from "jquery";

export default function Editor() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

// interface BoldRange {
//   start: number;
//   end: number;
// }

function App() {
  const language = useSelector((state: RootState) => state.language.value);

  const [patientID, setPatientID] = useState<string>("");
  const [presc, setPresc] = useState<string>("");

  const [error, setError] = useState<string>("");

  const [colorMode, setColorMode] = useState<boolean>(true); // true for dark mode, false for light mode

  // const [boldRanges, setBoldRanges] = useState<BoldRange[]>([]);
  // const textareaRef = useRef<HTMLDivElement>(null);

  const myDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the ref is valid
    if (myDivRef.current) {
      // Set contentEditable to true
      myDivRef.current.contentEditable = "true";
    }
  }, []);

  function getTextContent() {
    console.log("first");
    if (myDivRef.current) {
      const textContent = myDivRef.current.innerHTML;
      setPresc(textContent);
      console.log({ patientID, presc });
    }
  }

  // const handleTextChange = (event: React.ChangeEvent<HTMLDivElement>) => {
  //   setPresc(event.target.value);
  // };

  // const handleMakeBold = () => {
  //   if (!textareaRef.current) return;

  //   const selectionStart = textareaRef.current.selectionStart;
  //   const selectionEnd = textareaRef.current.selectionEnd;

  //   if (selectionStart === undefined || selectionEnd === undefined) return;

  //   if (selectionStart === selectionEnd) {
  //     return; // No text selected
  //   }

  //   // Update boldRanges to include the newly selected range
  //   setBoldRanges([
  //     ...boldRanges,
  //     { start: selectionStart, end: selectionEnd },
  //   ]);

  //   // Make the selected text bold
  //   const newPresc =
  //     presc.slice(0, selectionStart) +
  //     "<b>" +
  //     presc.slice(selectionStart, selectionEnd) +
  //     "</b>" +
  //     presc.slice(selectionEnd);

  //   setPresc(newPresc);
  // };

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
  // $(document).ready(function () {
  // $("#prescription").on("change", function () {
  //   const newContent = $(this).text();
  //   console.log("Div content changed to:", newContent);
  // });
  // });

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
          // name=""
          id="prescription"
          // cols={30}
          // rows={30}
          spellCheck="false"
          // required
          // placeholder="Write the prescription..."
          // contentEditable={true}
          // ref={textareaRef}
          ref={myDivRef}
          onChange={getTextContent}
          // value={presc}
          className={`mt-2 rounded-2xl p-2 px-3 h-full font-light text-sm bg-white ${
            colorMode
              ? "bg-opacity-10 placeholder:text-zinc-700"
              : "bg-opacity-80 placeholder:text-orange-700 placeholder:text-opacity-50"
          } placeholder:text-gray-500 resize-none`}
        >
          {presc}
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
