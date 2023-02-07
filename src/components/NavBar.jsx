import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import MyButton from "./controls/MyButton";

const pages = [
  { name: "Home", path: "/home" },
  { name: "Table", path: "/table" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //onclick of logout removes token from localStorage,and navigates back to login page
  const handleToken = () => {
    localStorage.removeItem("jwt");
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  };

  return (
    <AppBar position="absolute" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AcUnitIcon
            onClick={() => navigate("/home")}
            sx={{ display: { xs: "none", md: "flex" }, ml: 3, fontSize: 40 }}
          />
          {/*This is for burger menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ width: 1000 }}
                >
                  <Typography
                    variant="button"
                    onClick={() => navigate(page.path)}
                    textAlign="center"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <MyButton
                text="logout"
                onClick={() => {
                  handleToken();
                }}
                sx={{
                  color: "white",
                  display: { md: "none", xs: "block" },
                  ms: "auto",
                }}
              />
            </Menu>
          </Box>
          <AcUnitIcon
            sx={{ display: { xs: "flex", md: "none" }, ml: 3, fontSize: 40 }}
          />
          {/*This is for navbar on large screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <MyButton
                text={page.name}
                variant={"text"}
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={{
                  my: 2,
                  color: "whitesmoke",
                  display: "block",
                  mx: 3,
                  fontSize: "20px",
                  fontWeight: "bolder ",
                }}
              />
            ))}
          </Box>
          <MyButton
            text="logout"
            color="success"
            onClick={() => handleToken()}
            sx={{
              color: "white",
              display: { md: "block", xs: "none" },
              ms: "auto",
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
