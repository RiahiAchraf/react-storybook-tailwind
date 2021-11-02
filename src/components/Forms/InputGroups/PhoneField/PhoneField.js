import React from "react";
import { PropTypes as T } from "prop-types";

const propTypes = {
  optional: T.bool,
  label: T.string,
  type: T.string,
  name: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  placeholder: T.string,
};
const defaultProps = {
  label: "Phone Number",
  type: "text",
  placeholder: "",
};

export const PhoneField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  optional,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {optional && (
        <span className="text-sm text-gray-500" id="email-optional">
          Optional
        </span>
      )}

      <div className="mt-1 relative rounded-md shadow-sm">
        {/* Select Country 
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
        </div> */}

        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          // For Padding Add : pl-16
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

PhoneField.propTypes = propTypes;
PhoneField.defaultProps = defaultProps;
