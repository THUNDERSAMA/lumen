"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateByValue } from "../../utils/slices/UploaddataState";
import type { RootState } from "../../utils/store";
import { Providers } from "../../Providers";
import Cookies from "js-cookie";
import { decrypt } from "@/lib/auth";

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
  return (
    <>
      <Navbar />
      <main className="mainMain flex flex-col items-center justify-start gap-20 min-h-screen h-full w-screen">
        <section className="mt-36 w-96 max-w-[90vw] flex flex-col items-start">
          <h1 className="text-center text-xl font-normal">Upload</h1>
          <h2 className="text-center text-5xl font-bold">Prescription</h2>
        </section>
        <section className="">
          <span
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
          <br />
          <br />
          <form
            action=""
            className="relative flex flex-row w-full justify-center"
          >
            {!nextClicked ? (
              <div className="absolute w-96 max-w-[90vw] flex-1 flex flex-col gap-2 items-end justify-end">
                <input
                  type="text"
                  placeholder="Prescription Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-4 rounded-full border-[1px] border-black bg-white"
                />
                <input
                  type="text"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-4 rounded-full border-[1px] border-black bg-white"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNextClicked(true);
                  }}
                  className="mt-2 me-2"
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
            ) : (
              <div className="absolute w-96 max-w-[90vw] flex-1 flex flex-col gap-4 items-center justify-between">
                <textarea
                  name=""
                  id=""
                  rows={3}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-40 p-4 rounded-3xl border-[1px] border-black bg-white"
                />
                <span className="w-full flex flex-row justify-between px-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNextClicked(false);
                    }}
                  >
                    <Image
                      src={"/arrow.png"}
                      height={50}
                      width={50}
                      alt="back"
                    />
                  </button>
                  <Link href={"/scan"}>
                    <Image
                      src={"/arrow.png"}
                      height={50}
                      width={50}
                      alt="next"
                      className="rotate-180"
                    />
                  </Link>
                </span>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
