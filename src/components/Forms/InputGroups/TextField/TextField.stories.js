import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Forms/InputGroups/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const InputLabel = Template.bind({});

InputLabel.args = {
  hasError: false,
  optional: false,
  label: "Email",
  placeholder: "you@example.com",
  errorMessage: "Your password must be less than 4 characters.",
};
