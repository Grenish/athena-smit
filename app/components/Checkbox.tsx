"use client";

import React, { useState } from "react";


interface CustomCheckboxProps {
  label?: string;
  className?: string;
}

export default function CustomCheckbox({ label, className }: CustomCheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleCheckbox = () => setChecked((prev) => !prev);

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleCheckbox}
          className="absolute opacity-0 h-0 w-0"
        />
        <div
          className={`cursor-pointer w-4 h-4 border-2 rounded-sm flex items-center justify-center transition-all duration-200 
            ${
              checked
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-gray-400"
            }
          `}
          onClick={toggleCheckbox}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <label
          className="ml-3 cursor-pointer select-none text-xs"
          onClick={toggleCheckbox}
        >
          {label}
        </label>
      )}
    </div>
  );
}
