import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DrawerLeft from "./DrawerLeft";
import { Link } from "react-scroll";

const pages = ["About Me", "Portfolio", "Keep In Touch", "Contact Me"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const topOfTheScreen = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppBar sx={{ backgroundColor: "#ffffff" }} position="sticky" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ cursor: "pointer" }}>
          <Link
            to=""
            style={{ textDecoration: "none" }}
            onClick={topOfTheScreen}
          >
            <Box display="flex" alignItems="center">
              <Typography
                variant="h4"
                component="a"
                sx={{
                  display: { xs: "none", md: "flex", color: "#23ce6b" },
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
              >
                𝒩
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  display: { xs: "none", md: "flex", color: "#000000" },
                  fontFamily: "monospace",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                𝒜𝐵𝒜𝑅𝒜𝒥
              </Typography>
              <Typography
                variant="h4"
                component="a"
                sx={{
                  display: { xs: "none", md: "flex", color: "#23ce6b" },
                  fontFamily: "monospace",
                  marginLeft: "10px",
                  textDecoration: "none",
                }}
              >
                𝒟
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  display: { xs: "none", md: "flex", color: "#000000" },
                  fontFamily: "monospace",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                𝒜𝐻𝒜𝐿
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{
              display: { xs: "block", md: "none", lg: "none" },
            }}
          >
            <DrawerLeft />
          </Box>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={topOfTheScreen}
          >
            <Box display="flex" justifyContent="center" margin="auto">
              <Typography
                variant="h6"
                component="a"
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  textDecoration: "none",
                  color: "#23ce6b",
                }}
              >
                𝒩
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                𝒶𝒷𝒶𝓇𝒶𝒿
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  marginLeft: "6px",
                  textDecoration: "none",
                  color: "#23ce6b",
                }}
              >
                𝒟
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                𝒶𝒽𝒶𝓁
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                marginLeft: "auto",
                marginRight: "5rem",
              },
            }}
          >
            <Button
              onClick={topOfTheScreen}
              size="large"
              sx={{
                my: 2,
                color: "gray",
                display: "block",
                marginLeft: "2rem",
                color: "#000000",

                "&:hover": {
                  backgroundColor: "#23ce6b",
                },
              }}
            >
              Home
            </Button>
            {pages.map((page, index) =>
              page === "Contact Me" ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  size="large"
                  sx={{
                    my: 2,
                    color: "gray",
                    display: "block",
                    marginLeft: "2rem",

                    backgroundColor: "#23ce6b",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#23ce6b",
                      color: "#ffffff",
                    },
                  }}
                >
                  <Link
                    to={page.split(" ").join("").toLowerCase()}
                    smooth={true}
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    {page}
                  </Link>
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  size="large"
                  sx={{
                    my: 2,
                    color: "gray",
                    display: "block",
                    marginLeft: "2rem",
                    "&:hover": {
                      backgroundColor: "#23ce6b",
                    },
                  }}
                >
                  <Link
                    to={
                      page.split(" ").join("") === "Home"
                        ? "/"
                        : page.split(" ").join("").toLowerCase()
                    }
                    smooth={true}
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    {page}
                  </Link>
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
