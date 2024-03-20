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
import { Pine } from "./icon/Pine";

const info = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#18BA51",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ height: "545px", backgroundImage: "/foot.png" }}
      >
        <Toolbar disableGutters>
          <Box>
            <Box display={"flex"} alignItems={"center"} sx={{ color: "#FFF" }}>
              <Pine width={40} height={40} />
              Food Delivery
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >{info.map((e)=>(
                <Button
                key={e}
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
                {e}
              </Button>
            ))}
        </Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
