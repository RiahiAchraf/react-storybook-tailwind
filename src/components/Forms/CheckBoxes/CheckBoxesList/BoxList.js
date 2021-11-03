import React from "react";

export const BoxLIst = ({ name, label, description }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
        <p id={`${name}-description`} className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};
