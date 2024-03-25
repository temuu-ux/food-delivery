import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  InputBase,
  styled,
  alpha,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Pine, Cart, Profile } from "../icon/Pine";
import SearchIcon from "@mui/icons-material/Search";
const gg = [
  { logo: <Cart width={24} height={24} />, title: "Сагс" },
  { logo: <Profile width={18} height={18} />, title: "Нэвтрэх" },
];
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
console.log("gg", ...gg);
const Header = () => {
  const theme = useTheme();
  const [color, setColor] = useState<number>(1);
  const pages = [
    { id: 1, title: "НҮҮР" },
    { id: 2, title: "ХООЛНЫ ЦЭС" },
    { id: 3, title: "ХҮРГЭЛТИЙН БҮС" },
  ];
  const handlerCol = (id: number) => {
    setColor(id);
  };
  return (
    <AppBar sx={{ backgroundColor: "#FFF", margin: "auto", boxShadow: "none" }}>
      <Container maxWidth={"xl"}>
        <Box display={"flex"} gap={10}>
          <Box
            gap={6}
            padding={2}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Pine width={40} height={40} />
            <Box
              gap={9}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page, key) => (
                <Typography
                  key={key}
                  variant="subtitle1"
                  onClick={() => handlerCol(page.id)}
                  sx={{
                    my: 2,
                    color:
                      color === page.id
                        ? theme.palette.primary.main
                        : theme.palette.primary.dark,
                  }}
                >
                  {page.title}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box padding={2}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#FFF",
                boxShadow: "none",
              }}
            >
              <Stack>
                <Box
                  gap={6}
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
                      sx={{ border: theme.palette.primary.dark, color: "gray" }}
                    />
                  </Search>

                  {gg.map((gg, key) => (
                    <Stack
                      display={"flex"}
                      key={key}
                      sx={{
                        my: 2,
                        color: theme.palette.primary.dark,
                        display: "block",
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"} gap={1}>
                        {" "}
                        {gg.logo}
                        <Typography variant="subtitle1"> {gg.title}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Box>
              </Stack>
            </AppBar>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
