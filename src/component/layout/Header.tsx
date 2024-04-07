import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Link,
} from "@mui/material";
import { Pine } from "../icon/Pine";
import { Search } from "./Search";
import { DrawerCard } from "../drawer/DrawerCard";
import { HeaderLogModal } from "./HeaderLogModal";

// console.log("gg", ...gg);
const Header = () => {
  const gg = [
    {
      id: 5,

      title: (
        <>
          <DrawerCard />
        </>
      ),
    },
    {
      id: 6,

      title: (
        <>
          <HeaderLogModal />
        </>
      ),
    },
  ];
  const theme = useTheme();
  const [color, setColor] = useState<number>(1);
  const pages = [
    { id: 1, title: "НҮҮР", link: "/dash-home" },
    { id: 2, title: "ХООЛНЫ ЦЭС", link: "/all-card-menu" },
    { id: 3, title: "ХҮРГЭЛТИЙН БҮС", link: "#" },
  ];
  const handlerCol = (id: number) => {
    setColor(id);
  };
  return (
    <AppBar sx={{ backgroundColor: "#FFF", margin: "auto", boxShadow: "none" }}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"} gap={10}>
          <Box
            gap={6}
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
                <Link href={page.link} key={key} underline="none">
                  <Typography
                    variant="subtitle1"
                    onClick={() => handlerCol(page.id)}
                    sx={{
                      my: 2,
                      color:
                        color === page.id
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark,
                      cursor: "pointer",
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
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
                  <Search />
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
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                        onClick={() => handlerCol(gg.id)}
                        sx={{
                          my: 2,
                          color:
                            color === gg.id
                              ? theme.palette.primary.main
                              : theme.palette.primary.dark,
                          cursor: "pointer",
                        }}
                      >
                        {gg.logo}

                        <Typography variant="subtitle1"> {gg.title}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Box>
              </Stack>
            </AppBar>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};
export default Header;
