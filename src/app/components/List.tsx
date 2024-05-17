import Link from "next/link";
import { useEffect, useState } from "react";

export default function List({ list, code }: { list: any[]; code: string }) {
  const [color, setColor] = useState<{
    primary: string;
    secondary: string;
    tertiary: string;
  }>({ primary: "", secondary: "", tertiary: "" });

  useEffect(() => {
    if (code === "pre") {
      setColor({
        primary: "text-red-950",
        secondary: "text-red-700",
        tertiary: "text-red-400",
      });
    } else if (code === "doc") {
      setColor({
        primary: "text-green-900",
        secondary: "text-green-700",
        tertiary: "text-green-400",
      });
    } else if (code === "pat") {
      setColor({
        primary: "text-blue-900",
        secondary: "text-blue-700",
        tertiary: "text-blue-400",
      });
    } else {
      setColor({
        primary: "text-orange-900",
        secondary: "text-orange-700",
        tertiary: "text-orange-400",
      });
    }
  }, [code]);
  return (
    <div className="flex flex-col w-full h-full p-2 pt-12 overflow-auto noScroll">
      {list.map((item, index) => (
        <Link
          href={""}
          key={index}
          className="flex flex-col items-start justify-between gap-2 p-4 px-6 w-full rounded-lg odd:bg-white odd:bg-opacity-30"
        >
          <span className={`font-bold text-2xl ${color.primary}`}>
            {item.name}
          </span>
          <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
            <span className={`font-semibold text-sm ${color.secondary}`}>
              {item.extra}
            </span>
            <span className={`${color.primary} text-xs`}>|</span>
            <span
              className={`font-semibold text-sm ${color.secondary} whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {item.type}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
