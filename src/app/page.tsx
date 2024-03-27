// // import { useRouter } from "next/navigation";
"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { updateByValue } from "./utils/slices/LanguageState";
import { Providers } from "./Providers";
import type { RootState } from "@/app/utils/store";
function App() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    const cookieLanguage = Cookies.get("language");
    console.log(cookieLanguage, " before dispatch");
    if (cookieLanguage) {
      dispatch(updateByValue(cookieLanguage));
    }
  }, []);

  useEffect(() => {
    if (language) {
      redirect("/home");
    }
  }, [language]);

  return null;
}

export default function Home() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
