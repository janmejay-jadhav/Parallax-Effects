import { Box, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import MyButton from "../controls/MyButton";
import { deleteData } from "../crud";

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

function DeleteModal({ openDelete, setOpenDelete, index }) {
  return (
    <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
      <Box sx={style} component={Paper} textAlign="center">
        <Typography variant="h4" color="green">
          Do you really want to Delete ?
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <MyButton
            text="yes"
            onClick={() => {
              deleteData(index);
              setOpenDelete(false);
            }}
          />
          <MyButton
            text="no"
            onClick={() => {
              setOpenDelete(false);
            }}
          />
        </div>
      </Box>
    </Modal>
  );
}

export default DeleteModal;
