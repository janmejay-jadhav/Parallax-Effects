import React, { useState } from "react";

function RegistrationValidation(value) {
  const [nameError, setNameError] = useState({ message: "", disabled: true });
  const [lNameError, setLNameError] = useState({ message: "", disabled: true });

  const fNameValidation = () => {
    if (value.fname === "") {
      setNameError({ message: "This field is required", disabled: true });
    } else if (value.fname.length <= 1) {
      setNameError({
        message: "minimum length is 2 characters",
        disabled: true,
      });
    } else if (value.fname.match(/[^a-zA-z]/g)) {
      setNameError({
        message: "Name should contain only letters",
        disabled: false,
      });
    } else {
      setNameError({ message: "", disabled: false });
    }
  };

  const lNameValidation = () => {
    if (value.lname === "") {
      setLNameError({ message: "This field is required", disabled: true });
    } else if (value.lname.length <= 1) {
      setLNameError({
        message: "minimum length is 2 characters",
        disabled: true,
      });
    } else if (value.lname.match(/[^a-zA-z]/g)) {
      setLNameError({
        message: "Name should contain only letters",
        disabled: false,
      });
    } else {
      setLNameError({ message: "", disabled: false });
    }
  };

  return { nameError, lNameError, fNameValidation, lNameValidation };
}

export default RegistrationValidation;
