import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Table as MuiTable,
  tableCellClasses,
  TableCell,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { useEffect, useState } from "react";
import MyButton from "../controls/MyButton";
import NavBar from "../NavBar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Table() {
   
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [index, setIndex] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, []);

  const [openDelete, setOpenDelete] = useState(false);

  const [first, setfirst] = useState(false);

  let localData = JSON.parse(localStorage.getItem("tableData"));

  let ModalEdit = (data) => {
    setSelectedData(data);
  };

  let Index = (index) => {
    setIndex(index);
  };

  return (
    <>
      <NavBar />
      <Paper
        elevation={12}
        sx={{ width: { md: "75%" }, ml: { md: "13%" }, mt: 15, mb: 10 }}
      >
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <MuiTable aria-label="customized table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  Dessert (100g serving)
                </StyledTableCell>
                <StyledTableCell align="center">Calories</StyledTableCell>
                <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="center">
                  Protein&nbsp;(g)
                </StyledTableCell>
                <StyledTableCell align="center">
                  <MyButton
                    text="Add"
                    startIcon={<AddIcon />}
                    variant="outlined"
                    onClick={() => setOpen(true)}
                  />
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {localData.map((element, index) => (
                <StyledTableRow key={index} id={index}>
                  <StyledTableCell align="center">
                    {element.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.calories}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.fat}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.carbs}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.protein}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <MyButton
                      text="Edit"
                      size="small"
                      color="warning"
                      startIcon={<EditIcon />}
                      sx={{ mr: 3 }}
                      onClick={() => {
                        setOpenEdit(true);
                        ModalEdit(element);
                        Index(index);
                      }}
                    />
                    <MyButton
                      text="Delete"
                      size="small"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        setOpenDelete(true);
                        Index(index);
                        setfirst(!first);
                      }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Paper>
      {open && <AddModal open={open} setOpen={setOpen} />}
      {openEdit && (
        <EditModal
          openEdit={openEdit}
          index={index}
          selectedData={selectedData}
          setOpenEdit={setOpenEdit}
        />
      )}
      {openDelete && (
        <DeleteModal
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          index={index}
        />
      )}
      <Footer />
    </>
  );
}

export default Table;




/* */