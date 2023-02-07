import { Box, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import MyButton from "../controls/MyButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: { md: 800 },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function EditConfirm(props) {
  const {
    openEditC,
    setOpenEditC,
    handleEditClose,
    EditData,
    tableData,
    index,
  } = props;

  console.log(openEditC);
  const handleClose = () => setOpenEditC(false);

  return (
    <Modal open={openEditC} onClose={handleClose}>
      <Box sx={style} component={Paper} textAlign="center">
        <Typography variant="h4" color="green">
          Do you really want to edit ?
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <MyButton
            text="yes"
            onClick={() => {
              EditData(tableData, index);
              setOpenEditC(false);
              handleEditClose();
            }}
          />
          <MyButton
            text="no"
            onClick={() => {
              setOpenEditC(false);
              handleEditClose();
            }}
          />
        </div>
      </Box>
    </Modal>
  );
}

export default EditConfirm;
