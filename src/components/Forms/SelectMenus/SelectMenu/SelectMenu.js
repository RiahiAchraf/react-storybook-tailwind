import React from "react";
import { PropTypes as T } from "prop-types";

const propTypes = {
  label: T.string,
  options: T.array,
  defaultValue: T.defaultValue,
  name: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};
const defaultProps = {
  options: [],
  label: "",
  defaultValue: "",
};

export const SelectMenu = ({
  label,
  name,
  options,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={defaultValue}
      >
        {options.map((opt) => (
          <option key={opt.id}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};

SelectMenu.propTypes = propTypes;
SelectMenu.defaultProps = defaultProps;
