import React from "react";
import { CheckBoxList } from "./CheckBoxesList";

export default {
  title: "Forms/CheckBoxes/CheckBoxesList",
  component: CheckBoxList,
};

const Template = (args) => <CheckBoxList {...args} />;

export const CheckBoxes = Template.bind({});

CheckBoxes.args = {
  BoxesList: [
    {
      id: 0,
      name: "comments",
      label: "Comments",
      description: "Get notified when someones posts a comment on a posting.",
    },
    {
      id: 1,
      name: "candidates",
      label: "Candidates",
      description: "Get notified when a candidate applies for a job.",
    },
    {
      id: 2,
      name: "offers",
      label: "Offers",
      description: "Get notified when a candidate accepts or rejects an offer.",
    },
  ],
  legend: "Notifications",
};
