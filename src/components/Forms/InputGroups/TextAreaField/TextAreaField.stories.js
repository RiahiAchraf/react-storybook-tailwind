import React from "react";
import { TextAreaField } from "./TextAreaField";

export default {
  title: "Forms/InputGroups/TextAreaField",
  component: TextAreaField,
};

const Template = (args) => <TextAreaField {...args} />;

export const TextArea = Template.bind({});

TextArea.args = {
  label: "About",
  defaultValue: "Hello",
  paragraph: "Write a few sentences about yourself.",
};
