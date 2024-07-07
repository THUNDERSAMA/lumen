"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateByValue } from "../../utils/slices/UploaddataState";
import type { RootState } from "../../utils/store";
import { Providers } from "../../Providers";
import Cookies from "js-cookie";
import { decrypt } from "@/lib/auth";
import { set } from "mongoose";
import ElementBound from "@/app/components/ElementBound";
import Spinner from "@/app/components/Spinner";
import Notification from "@/app/components/Notification";
import { useRouter } from "next/navigation";

export default function Upload() {
  return (
    <>
      <Providers>
        <App />
      </Providers>
    </>
  );
}
function App() {
  const dispatch = useDispatch();
  interface User {
    a_id: string;
    firstName: string;
    lastName: string;
    m_id: string;
    phone: number;
  }
  const [nextClicked, setNextClicked] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [localValue, setlocalValue] = useState<{ [key: string]: User }>({});
  const session = Cookies.get("session");
  async function checking() {
    if (!session) {
      // router.push("/home");
    } else {
      setlocalValue(await decrypt(session));
      // console.log(await decrypt(session));
    }
  }

  useEffect(() => {
    checking();
  });
  //console.log(localValue);
  //const firstName = localValue.user?.firstName;
  const [onSelectClick, setOnSelectClick] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);

  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleNextClicked() {
    if (title.trim() === "") {
      setError("Please provide a title");
      return;
    }
    if (type.trim() === "") {
      setError("Please select a type");
      return;
    }
    setError(null);
    setNextClicked(true);
  }

  function handleScanRedirect(e: any) {
    e.preventDefault();
    setLoading(true);
  }

  const router = useRouter();

  useEffect(() => {
    if (loading) {
      router.push("/scan");
    }
    if (error) {
      loading && setLoading(false);
    }
  }, [error, loading, router]);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useMemo(() => {
    let crjson = {};
    crjson = {
      title: title,
      type: type,
      description: description,
      cookieId: localValue.user?.m_id || " ",
    };
    // console.log(crjson);
    dispatch(updateByValue(JSON.stringify(crjson)));
  }, [title, type, description, localValue.user?.m_id, dispatch]);

  useEffect(() => {
    if (!inputDisabled) {
      inputRef.current?.focus();
    }
  }, [inputDisabled]);

  return (
    <>
      <Notification
        message={error}
        setMessage={setError}
        time={5000}
        position="top"
        type="error"
      />
      <Navbar />
      <main className="mainMain flex flex-col items-center justify-start gap-20 min-h-screen h-full w-screen">
        <section className="mt-36 w-96 max-w-[90vw] flex flex-col items-start">
          <h1 className="text-center text-xl font-normal">Upload</h1>
          <h2 className="text-center text-5xl font-bold">Prescription</h2>
        </section>
        <section className="">
          {/* <span
            className={`relative w-28 h-16 flex flex-row items-center justify-center bg-purple-50 rounded-full bgSwitch ${
              !nextClicked ? "after:left-1" : "after:left-[calc(100%-3.75rem)]"
            }`}
          >
            <span
              // onClick={() => setNextClicked(false)}
              className="absolute z-10 left-1 rounded-full aspect-square p-2 w-14 place-content-center text-center font-semibold"
              style={!nextClicked ? { opacity: 1 } : { opacity: 0.3 }}
            >
              1
            </span>
            <span
              // onClick={() => setNextClicked(true)}
              className="absolute z-10 right-1 rounded-full aspect-square p-2 w-14 place-content-center text-center font-semibold"
              style={nextClicked ? { opacity: 1 } : { opacity: 0.3 }}
            >
              2
            </span>
          </span>
          <br /> */}
          <form
            action=""
            className="relative flex flex-row w-full justify-center"
          >
            {/* {!nextClicked ? ( */}
            <div
              className={`${
                !nextClicked
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } absolute z-10 w-96 max-w-[90vw] flex-1 flex flex-col items-end justify-end`}
            >
              <input
                type="text"
                placeholder="Prescription Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full h-14 p-4 rounded-t-3xl border-[1px] border-black border-b-0 bg-white"
              />
              {/* <input
                  type="text"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-4 rounded-full border-[1px] border-black bg-white"
                /> */}
              <div className="relative w-full" ref={selectRef}>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setOnSelectClick(!onSelectClick);
                  }}
                  className="bg-white w-full h-14 p-4 rounded-b-3xl border-[1px] border-black flex justify-between items-center gap-2 cursor-pointer"
                >
                  <input
                    ref={inputRef}
                    className={`w-full bg-white outline-none relative z-10 ${
                      inputDisabled ? "pointer-events-none" : ""
                    }`}
                    placeholder={
                      inputDisabled ? "Select Type" : "Mention the Type"
                    }
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    disabled={inputDisabled}
                  />
                  <Image
                    src={"/back.png"}
                    height={35}
                    width={35}
                    alt="next"
                    className="invert scanBtn aspect-square -rotate-90"
                  />
                </span>
                <ElementBound
                  onOutsideClick={setOnSelectClick}
                  extraRef={selectRef}
                >
                  <div
                    className={`absolute overflow-hidden ${
                      onSelectClick ? "h-32 opacity-100 " : "h-0 opacity-0 "
                    } text-[15px] w-1/2 p-1 ml-1 rounded-2xl border-[1px] border-black bg-white flex flex-col justify-between top-16`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setType("Prescription");
                        setOnSelectClick(false);
                        setInputDisabled(true);
                      }}
                      className="hover:bg-purple-200 p-2 w-full rounded-xl text-left pl-4"
                    >
                      Prescription
                    </button>
                    {/* <hr /> */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setType("Report");
                        setOnSelectClick(false);
                        setInputDisabled(true);
                      }}
                      className="hover:bg-purple-200 p-2 w-full rounded-xl text-left pl-4"
                    >
                      Report
                    </button>
                    {/* <hr /> */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setInputDisabled(false);
                        setOnSelectClick(false);
                        setType("");

                        // inputRef.current?.focus();
                      }}
                      className="hover:bg-purple-200 p-2 w-full rounded-xl text-left pl-4"
                    >
                      Other
                    </button>
                  </div>
                </ElementBound>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNextClicked();
                }}
                className="mt-4 me-2"
              >
                <Image
                  src={"/arrow.png"}
                  height={50}
                  width={50}
                  alt="next"
                  className="rotate-180"
                />
              </button>
            </div>
            {/* ) : ( */}
            <div
              className={`${
                nextClicked
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } absolute z-0 w-96 max-w-[90vw] flex-1 flex flex-col gap-4 items-center justify-between`}
            >
              <textarea
                name=""
                id=""
                rows={3}
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full ${
                  nextClicked ? "h-40" : "h-28"
                } p-4 rounded-3xl border-[1px] border-black bg-white`}
              />
              <span className="w-full flex flex-row justify-between px-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNextClicked(false);
                  }}
                >
                  <Image src={"/arrow.png"} height={50} width={50} alt="back" />
                </button>
                <button
                  className="bg-black h-[50px] w-[50px] grid place-content-center rounded-full"
                  onClick={handleScanRedirect}
                >
                  {loading ? (
                    <Spinner className="h-7 w-7 text-white fill-zinc-600" />
                  ) : (
                    <Image
                      src={"/arrow.png"}
                      height={50}
                      width={50}
                      alt="next"
                      className="rotate-180 scanBtn"
                    />
                  )}
                </button>
              </span>
            </div>
            {/* )} */}
          </form>
        </section>
      </main>
    </>
  );
}
