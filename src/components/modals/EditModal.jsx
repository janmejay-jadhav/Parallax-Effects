import { Box, Modal, Paper } from "@mui/material";
import React from "react";
import EditDataForm from "../forms/EditDataForm";

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

function EditModal(props) {
  const { openEdit, setOpenEdit,selectedData,index } = props;

  const handleEditClose = () => setOpenEdit(false);
  return (
    <>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Box sx={style} component={Paper}>
          <EditDataForm handleEditClose={handleEditClose} index={index} selectedData={selectedData} />
        </Box>
      </Modal>
    </>
  );
}

export default EditModal;
