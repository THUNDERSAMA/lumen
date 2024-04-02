"use client";
import { useEffect, useState } from "react";

export default function EditorHint({
  hintList,
  colorMode,
  caretPosition,
}: {
  hintList: string[];
  colorMode: boolean;
  caretPosition: { top: number; left: number };
}) {
  const [top, setTop] = useState<number>(caretPosition.top);
  const [left, setLeft] = useState<number>(caretPosition.left);
  useEffect(() => {
    if (caretPosition.top !== 0 || caretPosition.left !== 0) {
      setTop(caretPosition.top);
      setLeft(caretPosition.left);
    }
  }, [caretPosition]);

  return hintList ? (
    <section
      className={`absolute  ${
        caretPosition.top === 0 || caretPosition.left === 0
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
      style={{ top: top - 40, left: left - 125 }}
    >
      <ul
        className={` flex flex-row items-center justify-center rounded-3xl mobile:flex-rowmobile:rounded-3xl tablet:flex-coltablet:rounded-2xl w-fit ${
          colorMode
            ? "bg-zinc-900 bg-opacity-100"
            : "bg-zinc-100 bg-opacity-100"
        }`}
      >
        {hintList.map((hint, index) => (
          <>
            <li
              key={index}
              title={hint}
              className={`${
                colorMode ? "-hover:bg-opacity-10 text-white" : "text-black"
              } 
              ${index === 0 && "pl-2 pr-1"} 
              ${index === hintList.length - 1 && "pr-2 pl-1"}
                py-2 w-[80px] text-xs text-center text-ellipsis whitespace-nowrap overflow-hidden mobile:rounded-3xl -tablet:rounded-2xl cursor-pointer select-none`}
            >
              {hint}
            </li>
            {index < hintList.length - 1 ? (
              <span
                className={`text-opacity-[0.07] ${
                  colorMode ? "text-white" : "text-black"
                }`}
              >
                |
              </span>
            ) : null}
          </>
        ))}
      </ul>
      <span
        className={`mx-auto mb-[-1px] flex h-2 w-5 backdrop-blur-md rotate-180 ${
          colorMode
            ? "bg-zinc-900 bg-opacity-100"
            : "bg-zinc-100 bg-opacity-100"
        }`}
        style={{ clipPath: "polygon(50% 0, 0% 100%, 100% 100%)" }}
      />
    </section>
  ) : null;
}
function useEfffect(arg0: () => void, arg1: { top: number; left: number }[]) {
  throw new Error("Function not implemented.");
}
