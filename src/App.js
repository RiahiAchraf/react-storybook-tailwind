import React, { useState } from "react";
import "./App.css";
import { TextField } from "./components/Forms/InputGroups/TextField/TextField";
import { SelectMenu } from "./components/Forms/SelectMenus/SelectMenu/SelectMenu";
import { SelectMenuWithCheck } from "./components/Forms/SelectMenus/SelectMenuWithCheck/SelectMenuWithCheck";

function App() {
  const [firstName, setFirstName] = useState("");

  const onChange = (e) => {
    setFirstName(e.target.value);
  };

  const options = [
    { id: 0, name: "United States" },
    { id: 1, name: "Canada" },
    { id: 2, name: "Mexico" },
  ];

  return (
    <>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={onChange}
      />
      <SelectMenu label="Location" options={options} />
      <SelectMenuWithCheck label="Hello" people={options} />
    </>
  );
}

export default App;
