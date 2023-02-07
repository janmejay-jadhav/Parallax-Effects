import { Box, Modal, Paper } from "@mui/material";
import React from "react";
import AddDataForm from "../forms/AddDataForm";

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

function AddModal(props) {
  const { open, setOpen } = props;

  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component={Paper}>
          <AddDataForm handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default AddModal;
