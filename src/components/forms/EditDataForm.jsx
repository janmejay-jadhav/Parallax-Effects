import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyButton from "../controls/MyButton";
import MyText from "../controls/MyText";
import EditIcon from "@mui/icons-material/Edit";
import { EditData } from "../crud";
import EditConfirm from "../modals/EditConfirm";

function EditDataForm({ handleEditClose, selectedData, index }) {
  const [openEditC, setOpenEditC] = useState(false);

  const [tableData, setTableData] = useState(selectedData);


  useEffect(() => {
    setTableData({ ...selectedData });
  }, [selectedData]);

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData({ ...tableData, [name]: value });
  };
  return (
    <>
      <Typography fontWeight={"bolder"} variant="h4" marginBottom={2}>
        Edit Item
      </Typography>
      <Grid container justifyContent={"center"} columnSpacing={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <MyText
            autoFocus
            label="Name"
            name="name"
            value={tableData.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MyText
            autoFocus
            label="Calories"
            name="calories"
            value={tableData.calories}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MyText
            autoFocus
            label="Fat"
            name="fat"
            value={tableData.fat}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MyText
            autoFocus
            label="Carbs"
            name="carbs"
            value={tableData.carbs}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MyText
            autoFocus
            label="Protien"
            name="protein"
            value={tableData.protein}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          justifyContent="space-between"
        >
          <MyButton
            text="Edit"
            onClick={() => {setOpenEditC(true)}}
            startIcon={<EditIcon />}
          />
          <MyButton text="cancel" color="error" onClick={handleEditClose} />
        </Grid>
      </Grid>
      {openEditC && (
        <EditConfirm
          openEditC={openEditC}
          handleEditClose={handleEditClose}
          EditData={EditData}
          setOpenEditC={setOpenEditC}
          tableData={tableData}
          index={index}
        />
      )}
    </>
  );
}

export default EditDataForm;
