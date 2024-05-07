"use client";
import { useEffect, useRef, useState } from "react";

export default function EditorHint({
  hintList,
  colorMode,
  caretPosition,
  onHintClick,
}: {
  hintList: string[];
  colorMode: boolean;
  caretPosition: { top: number; left: number };
  onHintClick: (hint: string) => void;
}) {
  const [top, setTop] = useState<number>(caretPosition.top);
  const [left, setLeft] = useState<number>(caretPosition.left);
  const hintSection = useRef<HTMLElement>(null);
  useEffect(() => {
    if (caretPosition.top !== 0 || caretPosition.left !== 0) {
      setTop(caretPosition.top);
      setLeft(caretPosition.left);
    }
  }, [caretPosition]);

  return hintList.length > 0 ? (
    <section
      ref={hintSection}
      className={`absolute drop-shadow-xl ${
        caretPosition.top === 0 || caretPosition.left === 0
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
      style={{
        top: top - 40,
        left: left - (hintSection.current?.offsetWidth ?? 0) / 2,
      }}
    >
      <div
        className={`p-[2px] flex flex-row items-center justify-center rounded-3xl mobile:flex-rowmobile:rounded-3xl tablet:flex-coltablet:rounded-2xl w-fit ${
          colorMode
            ? "bg-zinc-900 bg-opacity-100"
            : "bg-zinc-100 bg-opacity-100"
        }`}
      >
        {hintList.map((hint, index) => (
          <span className="flex items-center" key={index}>
            <button
              title={hint}
              className={`${
                colorMode
                  ? `text-white ${index === 0 && "bg-orange-700 bg-opacity-10"}`
                  : `text-black ${index === 0 && "bg-orange-200 bg-opacity-50"}`
              } 
                px-2 py-2 w-fit text-xs text-center text-ellipsis whitespace-nowrap overflow-hidden mobile:rounded-3xl -tablet:rounded-2xl cursor-pointer select-none`}
              onClick={() => onHintClick(hint)}
            >
              {hint}
            </button>
            {/* {index < hintList.length - 1 ? (
              <span
                className={`text-opacity-[0.07] ${
                  colorMode ? "text-white" : "text-black"
                }`}
              >
                |
              </span>
            ) : null} */}
          </span>
        ))}
      </div>
      <span
        className={`mx-auto mt-[-1px] flex h-2 w-5 backdrop-blur-md rotate-180 ${
          colorMode
            ? "bg-zinc-900 bg-opacity-100"
            : "bg-zinc-100 bg-opacity-100"
        }`}
        style={{ clipPath: "polygon(50% 0, 0% 100%, 100% 100%)" }}
      />
    </section>
  ) : null;
}
