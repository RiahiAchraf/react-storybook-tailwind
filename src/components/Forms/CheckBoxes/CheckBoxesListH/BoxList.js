import React from "react";

export const BoxList = ({ name }) => {
  return (
    <div className="relative flex items-start py-4">
      <div className="min-w-0 flex-1 text-sm">
        <label
          htmlFor={`${name}`}
          className="font-medium text-gray-700 select-none"
        >
          {name}
        </label>
      </div>
      <div className="ml-3 flex items-center h-5">
        <input
          id={`${name}`}
          name={`${name}`}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
    </div>
  );
};
