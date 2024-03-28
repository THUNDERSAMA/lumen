"use client";
import { Providers } from "@/app/Providers";
import type { RootState } from "@/app/utils/store";
import { useState } from "react";
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
      className={`bg-black h-svh w-screen flex gap-10 flex-col justify-center items-center text-black relative ${
        error && "mobile:pt-7 tablet:pt-0 desktop:pt-0"
      }`}
    >
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

      <form
        action=""
        className="bg-transparent p-3 flex flex-col mobile:w-full mobile:rounded-none mobile:h-full tablet:w-[70%] tablet:h-[90%] tablet:rounded-lg desktop:w-1/2 desktop:h-3/4 desktop:rounded-lg h-[90%]"
      >
        <input
          type="text"
          id="presText"
          required
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          className="rounded-2xl p-2 px-3 bg-white text-white placeholder:text-gray-500 bg-opacity-10"
        />
        <p className="text-[10px] text-end font-light text-gray-100 text-opacity-70 px-2 mt-0.5">
          Ask your patient for their Lumen ID
        </p>
        <textarea
          name=""
          id="presDesc"
          cols={30}
          rows={30}
          spellCheck="false"
          required
          placeholder="Write the prescription..."
          // try for multiline placeholder
          value={presc}
          onChange={(e) => setPresc(e.target.value)}
          className="mt-2 rounded-2xl p-2 px-3 bg-white text-white placeholder:text-gray-500 bg-opacity-10 resize-none"
        />
        <button
          type="submit"
          className="mt-4 bg-transparent text-white text-center text-xs w-2/5 hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
