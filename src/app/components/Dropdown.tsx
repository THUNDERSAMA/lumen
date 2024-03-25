"use client";
import React, { useState } from "react";

export default function Dropdown({ items, onSelect }: any) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = items.find(
      (item: any) => item.value === event.target.value
    );
    if (selectedItem) {
      onSelect(selectedItem);
    }
  };
  return (
    <select
      className="w-20 p-2 font-semibold bg-white text-xs rounded-full focus:outline-none text-black cursor-pointer"
      name="Dropdown"
      onChange={handleSelectChange}
    >
      {items.map((item: any) => (
        <option
          key={item.value}
          className="text-xs text-center"
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}
