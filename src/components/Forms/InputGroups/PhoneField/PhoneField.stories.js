import React from "react";
import { PhoneField } from "./PhoneField";

export default {
  title: "Forms/InputGroups/PhoneField",
  component: PhoneField,
};
const Template = (args) => <PhoneField {...args} />;

export const InputLabel = Template.bind({});
InputLabel.args = {
  label: "Phone Number",
  placeholder: "+1 (555) 987-6543",
};
