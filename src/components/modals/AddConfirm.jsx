import { Box, Modal, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

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

function AddConfirm(props) {
  const { openA, setOpenA, handleClose } = props;
  
  const handleAddClose = () => setOpenA(false);
  return (
    <>
      <Modal open={openA} onClose={handleAddClose}>
        <Box sx={style} component={Paper} textAlign="center">
          <Typography variant="h4" color="green">
            Data Added Successfully!!!!!!!
          </Typography>
          <ThumbUpAltIcon color="success" sx={{ fontSize: "100px", mt: 3 }} />
        </Box>
      </Modal>
    </>
  );
}

export default AddConfirm;
