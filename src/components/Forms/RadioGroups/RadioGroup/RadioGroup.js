import React from "react";
import { propTypes as T } from "prop-types";
import { RadioItem } from "./RadioItem";

const propTypes = {};
const defaultProps = {};

export const RadioGroup = ({ RadiosList, label, description }) => {
  return (
    <div className="pt-6 sm:pt-5">
      <div className="sm:items-baseline">
        <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700">
          {label}
        </div>
        <div className="sm:col-span-2">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">{description}</p>
            <div className="mt-4 space-y-4">
              {RadiosList.map(({ id, name, label }) => (
                <RadioItem key={id} name={name} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
