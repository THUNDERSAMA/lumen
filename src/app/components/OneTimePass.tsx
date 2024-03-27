import Link from "next/link";
import Translate from "../Translate";
import React from "react";

export default function OneTimePass({
  handleOTP,
}: React.PropsWithChildren<{ handleOTP: (toggle: boolean) => void }>) {
  return (
    <div className="w-80">
      <h1 className="font-semibold text-2xl">
        <Translate>OTP is sent to your phone</Translate>
      </h1>
      <span className="text-xs opacity-80">
        <Translate>dont share it with anyone!</Translate>
      </span>
      <form action="" className="mt-4 flex flex-col items-center gap-5 w-80">
        <div className="w-full flex flex-row justify-evenly ">
          <input
            type="text"
            placeholder="_"
            className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
          />
          <input
            type="text"
            placeholder="_"
            className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
          />
          <input
            type="text"
            placeholder="_"
            className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
          />
          <input
            type="text"
            placeholder="_"
            className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
          />
          <input
            type="text"
            placeholder="_"
            className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
          />
          <input
            type="text"
            placeholder="_"
            className=" aspect-square w-[50px] text-center p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-200"
          />
        </div>
        <button
          type="submit"
          className="text-center text-xs w-5/6 text-black bg-white font-semibold p-3 rounded-full"
        >
          Verify
        </button>
        <span className="text-[10px]">
          Didn&apos;t recieve an OTP?{" "}
          <Link
            href={""}
            onClick={() => handleOTP(false)}
            className=" underline"
          >
            Try again
          </Link>
        </span>
      </form>
    </div>
  );
}
