import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "./UserSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { ime, email } = existingUser[0];
  const [values, setValues] = useState({
    ime: ime,
    email: email,
  });

  const handleEditUser = () => {
    setValues({ ime: "", email: "" });
    navigate("/");
    dispatch(
      editUser({
        id: params.id,
        ime: values.ime,
        email: values.email,
      })
    );
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
      <Button onClick={handleEditUser}>Editiraj usera</Button>
    </div>
  );
};

export default EditUser;
