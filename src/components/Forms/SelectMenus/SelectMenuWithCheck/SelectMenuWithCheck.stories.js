import React from "react";
import { SelectMenuWithCheck } from "./SelectMenuWithCheck";

export default {
  title: "Forms/SelectMenus/SelectMenuWithCheck",
  component: SelectMenuWithCheck,
};

const Template = (args) => <SelectMenuWithCheck {...args} />;

export const MenuWithCheck = Template.bind({});

MenuWithCheck.args = {
  label: "Assigned to",
  people: [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
    { id: 7, name: "Caroline Schultz" },
    { id: 8, name: "Mason Heaney" },
    { id: 9, name: "Claudie Smitham" },
    { id: 10, name: "Emil Schaefer" },
  ],
};
