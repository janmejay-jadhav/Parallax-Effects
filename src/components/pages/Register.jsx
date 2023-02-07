import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState } from "react";
import MyText from "../controls/MyText";
import MyButton from "../controls/MyButton";
import { Link, useNavigate } from "react-router-dom";
import RegistrationValidation from "../Validation/RegistrationValidation";
import LoginValidation from "../Validation/LoginValidation";

function Register() {
  let [value, setValue] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "users",
  });

  const navigate = useNavigate();

  let sendData = async () => {
    try {
      let res = await axios.post(
        "https://products-jwt.onrender.com/users/register",
        value
      );

      if (!res.data.error) {
        alert("Registered Successfully");
        navigate("/");
      }
    } catch (error) {
      alert("Email Already Exists, Register again");
    }
  };

  const { emailError, emailValidation, passwordError, passwordValidation } =
    LoginValidation(value);

  const { nameError, lNameError, fNameValidation, lNameValidation } =
    RegistrationValidation(value);
  //Function to hadle input change

  let handleInputChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setValue({ ...value, [name]: values });
  };

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          minWidth: { xs: "100%", sm: "50%", lg: "25%" },
          maxWidth: { xs: "100%", sm: "50%", lg: "25%" },
          margin: { xs: "4.7% auto" },
          textAlign: "center",
          height: { xs: "600px" },
          borderRadius: "50px",
        }}
      >
        <Typography fontWeight={"bolder"} variant="h4" marginBottom={3}>
          Register Here
        </Typography>
        <Grid container justifyContent={"center"} columnSpacing={2} spacing={2}>
          <Grid item xs={8}>
            <MyText
              autoFocus
              label="First Name"
              name="fname"
              value={value.fname}
              onChange={handleInputChange}
              error={nameError.message}
              onKeyUp={fNameValidation}
            />
          </Grid>
          <Grid item xs={8}>
            <MyText
              label="Last Name"
              name="lname"
              value={value.lname}
              onChange={handleInputChange}
              error={lNameError.message}
              onKeyUp={lNameValidation}
            />
          </Grid>
          <Grid item xs={8}>
            <MyText
              label="Email"
              name="email"
              value={value.email}
              onChange={handleInputChange}
              error={emailError.message}
              onKeyUp={emailValidation}
            />
          </Grid>
          <Grid item xs={8}>
            <MyText
              type="password"
              label="Password"
              name="password"
              value={value.password}
              onChange={handleInputChange}
              error={passwordError.message}
              onKeyUp={passwordValidation}
            />
          </Grid>
          <Grid item xs={12}>
            <MyButton
              disabled={emailError.disabled || passwordError.disabled}
              text="Register"
              color="success"
              onClick={() => {
                sendData();
                setValue({
                  fname: "",
                  lname: "",
                  email: "",
                  password: "",
                  role: "users",
                });
              }}
            />
            <br />
            <br />
            <Typography>
              Already Have an Account? <Link to={"/"}>login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
export default Register;
