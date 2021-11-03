import React from "react";

export const RadioItem = ({ label, name }) => {
  return (
    <div className="flex items-center">
      <input
        id={name}
        name={`radio`}
        type="radio"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      />
      <label
        htmlFor={`${name}-radio`}
        className="ml-3 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};
