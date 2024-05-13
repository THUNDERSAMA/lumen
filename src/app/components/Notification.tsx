import { useEffect, useRef, useState } from "react";

export default function Notification({
  message,
  setMessage = null,
  type = "regular",
  position = "bottom",
  time = 0,
}: {
  message: string | null;
  setMessage?: any;
  type?: string;
  position?: "top" | "bottom";
  time?: number;
}) {
  const [positionValue, setPositionValue] = useState<string>("-top-10");
  const notiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(message);
    if (message) {
      if (position === "top") {
        setPositionValue("top-0");
        console.log("top-0");
      } else if (position === "bottom") {
        setPositionValue("bottom-0");
        console.log("bottom-0");
      }
    } else {
      if (position === "top") {
        setPositionValue("-top-10");
        console.log("top200");
      } else if (position === "bottom") {
        setPositionValue("-bottom-10");
        console.log("bottom200");
      }
    }
  }, [message, position]);

  useEffect(() => {
    if (message && time) {
      const timer = setTimeout(() => {
        if (positionValue === "top-0") {
          setPositionValue(`-top-10`);
          console.log("top100");
        } else if (positionValue === "bottom-0") {
          setPositionValue(`-bottom-10`);
          console.log("bottom100");
        }
        setMessage(null);
      }, time);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, time, setMessage, positionValue]);

  //   useEffect(() => {
  //     if (notiRef.current) {
  //       console.log(notiRef.current.clientHeight);
  //     }
  //   }, [message]);

  if (type === "regular") {
    type = "bg-slate-950";
  } else if (type === "error") {
    type = "bg-red-700";
  } else if (type === "success") {
    type = "bg-green-700";
  } else if (type === "warning") {
    type = "bg-yellow-700";
  } else if (type === "info") {
    type = "bg-blue-700";
  } else {
    console.log("Invalid type");
    return null;
  }

  return (
    <>
      <div
        ref={notiRef}
        className={`h-10 overflow-hidden fixed z-50 ${positionValue} ${type} w-full flex items-center justify-center text-white text-sm p-2 shadow`}
      >
        {message}
      </div>
    </>
  );
}
