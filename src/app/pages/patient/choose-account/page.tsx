"use client";
import { Providers } from "@/app/Providers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";

export default function chooseAccount({ params, searchParams }: any) {
  return (
    <Providers>
      <App searchParams={searchParams} />
    </Providers>
  );
}

function App({ searchParams }: any) {
  const router = useRouter();
  const commonMobNo = JSON.parse(searchParams.data)[0].phone;
  const items = [
    {
      id: 1,
      name: "Walter White",
      aadhar: "123456789012",
    },
    {
      id: 2,
      name: "Jack Sparrow",
      aadhar: "123456789012",
    },
    {
      id: 3,
      name: "Darth Vader",
      aadhar: "123456789012",
    },
    {
      id: 4,
      name: "Homer Simpson",
      aadhar: "123456789012",
    },
    {
      id: 5,
      name: "Frodo Baggins",
      aadhar: "123456789012",
    },
    {
      id: 6,
      name: "Sheldon Cooper",
      aadhar: "123456789012",
    },
    {
      id: 7,
      name: "Peter Griffin",
      aadhar: "123456789012",
    },
  ];

  // useEffect(() => {
  //   // Get JSON data from query parameters
  //   const jsonData = router.query;
  //   console.log(jsonData);
  // }, []);
  const km = JSON.parse(searchParams.data);
  console.log(JSON.parse(searchParams.data)[0].phone);
  //console.log(searchParams.data);
  async function fetchacc(mid: any) {
    try {
      const response = await fetch(`/api/patient_signin?m_id=${mid}`);
      if (response.ok) {
        //console.log(response);
        // resp.cookies.set('session', data.message, { expires: expires,httpOnly:false });
        router.push("main");
      } else {
        router.push("login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <main className="bg-purple-700 py-8 min-h-screen h-full w-screen flex gap-10 flex-col justify-center items-center relative text-white text-xl">
      <h1 className="mobile:w-screen tablet:w-[60%] flex flex-col items-center text-2xl font-semibold gap-2 text-center px-8">
        You have multiple accounts linked with
        <br />
        <span className="text-xl px-2 border-2 border-white border-opacity-40 rounded">
          {commonMobNo}
        </span>
      </h1>
      <div className="mobile:w-screen tablet:w-fit grid place-content-center mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2 px-4">
        {km.map(
          (item: {
            m_id: any;
            id: Key | null | undefined;
            firstName: string;
            lastName: string;
            a_id:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => (
            <div
              onClick={() => fetchacc(item.m_id)}
              key={item.m_id}
              className="cursor-pointer flex flex-col items-start bg-white bg-opacity-10 p-4 rounded-lg hover:text-purple-900 hover:bg-opacity-80 "
            >
              <span className="text-lg">
                {item.firstName + " " + item.lastName}
              </span>
              <span className="text-xs opacity-60">{item.a_id}</span>
            </div>
          )
        )}
      </div>
    </main>
  );
}
