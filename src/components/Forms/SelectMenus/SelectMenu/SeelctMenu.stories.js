import React from "react";
import { SelectMenu } from "./SelectMenu";

export default {
  title: "Forms/SelectMenus/SelectMenu",
  component: SelectMenu,
};

const Template = (args) => <SelectMenu {...args} />;

export const SimpleSelectMenu = Template.bind({});
SimpleSelectMenu.args = {
  label: "Location",
  options: [
    { id: 0, name: "United States" },
    { id: 1, name: "Canada" },
    { id: 2, name: "Mexico" },
  ],
};
