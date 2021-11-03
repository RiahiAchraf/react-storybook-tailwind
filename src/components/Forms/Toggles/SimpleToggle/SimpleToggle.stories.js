import React from "react";
import { SimpleToggle } from "./SimpleToggle";

export default {
  title: "Forms/Toggles/SimpleToggle",
  component: SimpleToggle,
};

const Template = (args) => <SimpleToggle {...args} />;

export const Toggle = Template.bind({});

Toggle.args = {
  toggleState: false,
};
