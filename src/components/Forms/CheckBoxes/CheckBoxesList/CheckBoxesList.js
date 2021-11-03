import React from "react";
import { PropTypes as T } from "prop-types";
import { BoxLIst } from "./BoxList";

const propTypes = {
  BoxesList: T.array,
  legend: T.string,
};
const defaultProps = {
  BoxesList: [],
  legend: "",
};

export const CheckBoxList = ({ BoxesList, legend }) => {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">{legend}</legend>
      {BoxesList.map(({ id, name, label, description }) => (
        <BoxLIst key={id} name={name} label={label} description={description} />
      ))}
    </fieldset>
  );
};

CheckBoxList.propTypes = propTypes;
CheckBoxList.defaulrProps = defaultProps;
