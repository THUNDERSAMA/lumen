import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux";

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
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="w-20 p-2 font-semibold bg-white text-xs rounded-full focus:outline-none text-black cursor-pointer inline-flex justify-center items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem.label}
        <Image src="/down_icon.svg" height={10} width={10} alt="down button" />
      </button>
      {isOpen && (
        <ul className="absolute bottom-[-60px] left-0 w-20 p-1 bg-white text-black shadow rounded-2xl outline outline-2 outline-black select-none max-h-80 overflow-y-scroll ">
          {items.map((item: any) => (
            <li
              key={item.value}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer text-center text-xs font-semibold px-4 py-2 ${
                checked ? "hover:bg-purple-200" : "hover:bg-orange-200"
              } rounded-2xl flex justify-center items-center gap-1`}
            >
              {selectedItem.value === item.value && (
                <Image
                  src="/check_icon.svg"
                  height={7}
                  width={7}
                  alt="down button"
                />
              )}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
