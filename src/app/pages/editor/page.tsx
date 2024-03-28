"use client";
import { Providers } from "@/app/Providers";
import type { RootState } from "@/app/utils/store";
import { useSelector } from "react-redux";

export default function Editor() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
function App() {
  const language = useSelector((state: RootState) => state.language.value);
  const user = useSelector((state: RootState) => state.user.value);
  return (
    <main
      className={`${user.primaryColor} h-svh w-screen flex gap-10 flex-col justify-center items-center text-black`}
    >
      <form
        action=""
        className="bg-white bg-opacity-30 flex flex-col w-3/4 h-3/4"
      >
        <label htmlFor="presText">Title</label>
        <input
          type="text"
          id="presText"
          placeholder="write an appropriate title to the prescription..."
        />
        <label htmlFor="presDesc">Description</label>
        <textarea
          name=""
          id="presDesc"
          cols={30}
          rows={10}
          placeholder="write the prescription..."
        />
      </form>
    </main>
  );
}
