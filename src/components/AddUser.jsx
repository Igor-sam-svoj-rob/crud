import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const AddUser = () => {
  const [values, setValues] = useState({
    ime: "",
    email: "",
  });

  const handleAddUser = () => {
    console.log(values);
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextInput
        label="Ime"
        value={values.ime}
        onChange={(e) => setValues({ ...values, ime: e.target.value })}
        inputProps={{ type: "text", placeholder: "Ime" }}
      />
      <TextInput
        label="E-mail"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "text", placeholder: "E-mail" }}
      />
      <Button onClick={handleAddUser} />
    </div>
  );
};

export default AddUser;
