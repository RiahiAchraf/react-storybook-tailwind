import React from "react";
import { PropTypes as T } from "prop-types";

const propTypes = {
  label: T.string,
  defaultValue: T.string,
  paragraph: T.string,
  name: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};
const defaultProps = {
  label: "",
  defaultValue: "",
  paragraph: "Write a few sentences about yourself.",
};

export const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  paragraph,
  defaultValue,
}) => {
  return (
    // className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
    <div>
      <label
        htmlFor={name}
        // sm:pt-2
        className="block text-sm font-medium text-gray-700 sm:mt-px"
      >
        {label}
      </label>
      {/* sm:mt-0 sm:col-span-2 */}
      <div className="mt-1">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          //   rows={3}
          //   max-w-lg
          className=" shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
          defaultValue={defaultValue}
        />
        <p className="mt-2 text-sm text-gray-500">{paragraph}</p>
      </div>
    </div>
  );
};

TextAreaField.propTypes = propTypes;
TextAreaField.defaultProps = defaultProps;
