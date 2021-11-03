import React from "react";
import { PropTypes as T } from "prop-types";
import { BoxList } from "./BoxList";

const propTypes = {
  legend: T.string,
  BoxesList: T.array,
};
const defaultProps = {
  legend: "",
  BoxesList: [],
};

export const CheckBoxListH = ({ BoxesList, legend }) => {
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">{legend}</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {BoxesList.map(({ id, name }) => (
          <BoxList key={id} name={name} />
        ))}
      </div>
    </fieldset>
  );
};

CheckBoxListH.prototype = propTypes;
CheckBoxListH.defaultProps = defaultProps;
