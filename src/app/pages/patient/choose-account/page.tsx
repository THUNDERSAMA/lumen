import { Providers } from "@/app/Providers";
import Link from "next/link";

export default function chooseAccount() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

function App() {
  const commonMobNo = "9073421833";
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
        {items.map((item) => (
          <Link
            href={{ pathname: "/patient/account", query: { id: item.id } }}
            key={item.id}
            className="cursor-pointer flex flex-col items-start bg-white bg-opacity-10 p-4 rounded-lg hover:text-purple-900 hover:bg-opacity-80 "
          >
            <span className="text-lg">{item.name}</span>
            <span className="text-xs opacity-60">{item.aadhar}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
