import { Button } from "@mui/material";
import React from "react";

function MyButton(props) {
  const { variant, text, color, size, onClick, ...other } = props;
  return (
    <Button
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
    >
      {text}
    </Button>
  );
}

export default MyButton;
