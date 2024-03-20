import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  InputBase,
  styled,
  alpha,
} from "@mui/material";
import { Pine, Face, Cart, Profile } from "./icon/Pine";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const gg = ["Сагс", "Нэвтрэх"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            gap={4}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Pine width={40} height={40} />
            <Face width={42} height={16} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "#000000",
                    display: "block",
                    fontStyle: "normal",
                    fontFamily: "SF Pro Text",
                    fontWeight: "700",
                    lineHeight: "16px",
                    fontSize: "14px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#FFF",
                boxShadow: "none",
              }}
            >
              <Toolbar>
                <Box
                  gap={4}
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                  }}
                >
                  <Search sx={{ border: "1px solid gray" }}>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: "gray" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                      sx={{ border: "black", color: "gray" }}
                    />
                  </Search>
                  <Cart width={24} height={24} />
                  <Profile width={18} height={18} />
                  <Box display={"flex"}>
                    {gg.map((gg) => (
                      <Button
                        key={gg}
                        sx={{
                          my: 2,
                          color: "#000000",
                          display: "block",
                          fontStyle: "normal",
                          fontFamily: "SF Pro Text",
                          fontWeight: "700",
                          lineHeight: "16px",
                          fontSize: "14px",
                        }}
                      >
                        {gg}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
