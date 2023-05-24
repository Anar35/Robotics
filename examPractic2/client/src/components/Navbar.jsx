import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollY = window.scrollY;

      if (scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        className="navbar"
        position="fixed"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          transition: ".4s",
        }}
      >
        <div className="container">
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <a href="#">
                  <img
                    src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp"
                    alt="logo"
                  />
                </a>
              </Typography>

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
                  <Link style={{ textDecoration: "none" }} to="/">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About Us</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Services</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Products</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Blog</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Contact</Typography>
                  </MenuItem>
                  <Link style={{ textDecoration: "none" }} to="/add-robot">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Add Robot</Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <a href="#">
                  <img
                    src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp"
                    alt="logo"
                  />
                </a>
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "flex-end",
                  },
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Home
                  </Button>
                </Link>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  About Us
                </Button>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Services
                </Button>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Products
                </Button>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Blog
                </Button>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Contact
                </Button>
                <Link style={{ textDecoration: "none" }} to="/add-robot">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Add Robot
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
