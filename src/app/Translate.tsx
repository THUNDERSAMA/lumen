import { getTranslation } from "./utils/TranslationUtils";
import { useSelector } from "react-redux";
import type { RootState } from "./utils/store";

export default function Translate({ children }: React.PropsWithChildren<{}>) {
  const lang = useSelector((state: RootState) => state.language.value);
  return <>{getTranslation(`${children}`, lang)}</>;
}
