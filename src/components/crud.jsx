

let ls = localStorage.getItem("tableData");
let table = ls ? JSON.parse(ls) : [];

export let addData = (data) => {
  table.push(data);
  localStorage.setItem("tableData", JSON.stringify(table));
};

export let deleteData = (index) => {
  // let tableData = localStorage.getItem("tableData");
  table.splice(index, 1);
  localStorage.setItem("tableData", JSON.stringify(table));
};

export let EditData = (data, index) => {
  // let editData = localStorage.getItem("tableData");
  table[index] = data;
  localStorage.setItem("tableData", JSON.stringify(table));
};
