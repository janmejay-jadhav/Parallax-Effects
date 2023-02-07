import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../controls/MyButton";
import MyText from "../controls/MyText";
import LoginValidation from "../Validation/LoginValidation";

function Login() {
  let [value, setValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { emailError, emailValidation, passwordError, passwordValidation } =
    LoginValidation(value);

  let login = async () => {
    try {
      let loginData = await axios.post(
        "https://products-jwt.onrender.com/users/login",
        value
      );
      localStorage.setItem("jwt", JSON.stringify(loginData.data.data));
      let token = await JSON.parse(localStorage.getItem("jwt"));
      if (token != null) {
        navigate("/home");
      }
    } catch (error) {
      alert("Email Does'nt Exist,Please Register");
    }
  };

  let handleInputChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setValue({ ...value, [name]: values });
  };

  return (
    <Paper
      elevation={6}
      sx={{
        minWidth: { xs: "100%", sm: "50%", lg: "25%" },
        maxWidth: { xs: "100%", sm: "50%", lg: "25%" },
        margin: { xs: "8% auto" },
        textAlign: "center",
        height: { xs: "500px" },
        borderRadius: "50px",
      }}
    >
      <Typography fontWeight={"bolder"} variant="h4" marginBottom={2}>
        Login
      </Typography>
      <Grid
        container
        mt={3}
        justifyContent={"center"}
        columnSpacing={2}
        spacing={5}
      >
        <Grid item xs={8}>
          <MyText
            autoFocus
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
        <Grid mt={3} item xs={12}>
          <MyButton
            disabled={emailError.disabled || passwordError.disabled}
            text="Login"
            color="success"
            onClick={() => {
              login();
              setTimeout(() => {
                setValue({
                  email: "",
                  password: "",
                });
              }, 3000);
            }}
          />
          <br />
          <br />
          <Typography>
            Don't Have an Account? <Link to={"/register"}>Register</Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Login;
