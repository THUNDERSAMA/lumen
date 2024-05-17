import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "@/app/utils/store";
import Translate from "../Translate";

export default function Dropdown({ items, checked, onSelect }: any) {
  const [isOpen, setIsOpen] = useState(false);
  // const language = Cookies.get("language") as string;
  const language = useSelector((state: RootState) => state.language.value);
  const [selectedItem, setSelectedItem] = useState(
    language
      ? items.filter((item: any) => item.value === language)[0]
      : items[0]
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        !dropdownRef.current ||
        !(dropdownRef.current as HTMLElement).contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      className={`absolute top-5 right-5 bg-white ${
        isOpen ? "h-[178px]" : "h-10"
      } inline-block border-[1px] border-black rounded-2xl overflow-hidden transition-all opacity-80`}
      ref={dropdownRef}
    >
      <button
        className="w-24 h-10 p-3 font-semibold bg-white text-xs focus:outline-none text-black cursor-pointer inline-flex justify-center items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Image src="/check_icon.svg" height={7} width={7} alt="down button" />
        ) : (
          <Image
            src="/down_icon.svg"
            height={10}
            width={10}
            alt="down button"
          />
        )}
        <Translate>{selectedItem.label}</Translate>
      </button>
      {isOpen && (
        <ul className="relative top-0 left-0 w-24 p-1 bg-transparent text-black shadow select-none max-h-80">
          {items.map((item: any) => {
            if (selectedItem.value !== item.value)
              return (
                <li
                  key={item.value}
                  onClick={() => handleItemClick(item)}
                  className={`${
                    checked ? "hover:bg-purple-200" : "hover:bg-orange-200"
                  } cursor-pointer text-center text-xs font-semibold px-4 py-2 rounded-xl flex justify-center items-center gap-1`}
                >
                  {item.label}
                </li>
              );
          })}
        </ul>
      )}
    </div>
  );
}
