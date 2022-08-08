import React from "react";
import TextInput from "./TextInput";

const AddUser = () => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextInput
        label="Ime"
        inputProps={{ type: "text", placeholder: "Ime" }}
      />
    </div>
  );
};

export default AddUser;
