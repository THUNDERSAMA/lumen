"use client";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./utils/store";
import Cookies from "js-cookie";
import { updateByValue } from "./utils/slices/LanguageState";
import { Providers } from "./Providers";
function App() {
  const dispatch = useDispatch();
  console.log(Cookies.get("language"), " before dispatch");
  dispatch(updateByValue(Cookies.get("language") || "en"));
  const lang = useSelector((state: RootState) => state.language.value);
  console.log(lang, " after dispatch");
  redirect("/home");
  return null;
}

export default function Home() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
