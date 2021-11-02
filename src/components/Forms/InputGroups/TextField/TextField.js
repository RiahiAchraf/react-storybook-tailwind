import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { PropTypes as T } from "prop-types";
import { redClass, blueClass } from "../../../System/Form/TextField";

const propTypes = {
  hasError: T.bool,
  optional: T.bool,
  label: T.string,
  type: T.string,
  name: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  placeholder: T.string,
};

const defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  ErrorMessage: "",
};

export const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  hasError,
  optional,
  errorMessage,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {optional && (
          <span className="text-sm text-gray-500" id="email-optional">
            Optional
          </span>
        )}
      </div>

      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          className={hasError ? redClass : blueClass}
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {hasError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {/* heroicones package : npm i @heroicons/react */}
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {hasError && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
