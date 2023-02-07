import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import MyText from "../controls/MyText";
import MyButton from "../controls/MyButton";
import AddIcon from "@mui/icons-material/Add";
import { addData } from "../crud";
import AddConfirm from "../modals/AddConfirm";

function AddDataForm({ handleClose }) {
  const [tableData, setTableData] = useState({
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });

  const [openA, setOpenA] = useState(false);

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData({ ...tableData, [name]: value });
  };

  return (
    <>
      <Typography fontWeight={"bolder"} variant="h4" marginBottom={2}>
        Add Item
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
            text="Add"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenA(true);
              addData(tableData);
              setTimeout(() => {
                handleClose();
              }, 2000);
            }}
          />
          <MyButton text="cancel" color="error" onClick={handleClose} />
        </Grid>
      </Grid>
      {openA && (
        <AddConfirm
          openA={openA}
          handleClose={handleClose}
          setOpenA={setOpenA}
        />
      )}
    </>
  );
}

export default AddDataForm;
