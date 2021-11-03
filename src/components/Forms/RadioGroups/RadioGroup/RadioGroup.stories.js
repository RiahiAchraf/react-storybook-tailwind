import React from "react";
import { RadioGroup } from "./RadioGroup";

export default {
  title: "Forms/RadioGroups/RadioGroup",
  component: RadioGroup,
};

const Template = (args) => <RadioGroup {...args} />;

export const SimpleRadioGroup = Template.bind({});

SimpleRadioGroup.args = {
  label: "Push Notifications",
  description: "These are delivered via SMS to your mobile phone.",
  RadiosList: [
    { id: 0, name: "everything", label: "Everything" },
    { id: 1, name: "email", label: "Same as email" },
    { id: 2, name: "notifications", label: "No push notifications" },
  ],
};
