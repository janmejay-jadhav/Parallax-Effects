import { useState } from "react";

function LoginValidation(value) {
  const [emailError, setEmailError] = useState({ message: "", disabled: true });
  const [passwordError, setPasswordError] = useState({
    message: "",
    disabled: true,
  });

  let emailValidation = () => {
    let regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (value.email === "") {
      setEmailError({ message: "This field is required", disabled: true });
    } else if (!regex.test(value.email)) {
      setEmailError({ message: "Invalid email address", disabled: true });
    } else {
      setEmailError({ message: "", disabled: false });
    }
  };
  let passwordValidation = () => {
    let regname = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (value.password === "") {
      setPasswordError({ message: "This field is required", disabled: true });
    } else if (!regname.test(value.password)) {
      setPasswordError({
        message:
          "Minimum 8 characters. at least one uppercase letter,one lowercase letter,one number",
        disabled: true,
      });
    } else {
      setPasswordError({ message: "", disabled: false });
    }
  };
  return { emailError, emailValidation, passwordError, passwordValidation };
}

export default LoginValidation;
