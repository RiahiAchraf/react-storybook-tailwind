import React from "react";
import { CheckBoxListH } from "./CheckBoxesListH";

export default {
  title: "Forms/CheckBoxes/CheckBoxesListH",
  component: CheckBoxListH,
};

const Template = (args) => <CheckBoxListH {...args} />;
export const CheckBoxesWithHeading = Template.bind({});

CheckBoxesWithHeading.args = {
  legend: "Members",
  BoxesList: [
    { id: 1, name: "Annette Black" },
    { id: 2, name: "Cody Fisher" },
    { id: 3, name: "Courtney Henry" },
    { id: 4, name: "Kathryn Murphy" },
    { id: 5, name: "Theresa Webb" },
  ],
};
