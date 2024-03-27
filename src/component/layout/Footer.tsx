import * as React from "react";
import { Box, Stack, Link } from "@mui/material";
import { FaceBook, X, Ins, Pine } from "../footerIcon/Logo";

const Footer = () => {
  return (
    <Stack
      display={"flex"}
      // width={"full"}
      height={"545px"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingBottom={10}
      sx={{ backgroundImage: "url(/green.png)" }}
    >
      <Stack
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Box>
          <Stack
            alignItems={"center"}
            textAlign={"center"}
            sx={{ color: "#FFF" }}
          >
            <Box display={"flex"} textAlign={"center"} alignItems={"center"}>
              <Pine width={40} height={40} />
              Food Delivery
            </Box>
          </Stack>
          <Box
            gap={18}
            display={"flex"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Link
              href="#"
              color={"#FFFFFF"}
              underline="always"
              sx={{
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Нүүр
            </Link>
            <Link
              color={"#FFFFFF"}
              href="#"
              underline="always"
              sx={{
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Холбоо барих
            </Link>
            <Link
              color={"#FFFFFF"}
              href="#"
              underline="always"
              sx={{
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Хоолны цэс
            </Link>
            <Link
              color={"#FFFFFF"}
              href="#"
              underline="always"
              sx={{
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Үйлчилгээний нөхцөл
            </Link>
            <Link
              color={"#FFFFFF"}
              href="#"
              underline="always"
              sx={{
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Хүргэлтийн бүс
            </Link>
            <Link
              color={"#FFFFFF"}
              href="#"
              underline="always"
              sx={{
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Нууцлалын бодлого
            </Link>
          </Box>
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            gap={5}
            padding={4}
          >
            <Stack>
              <FaceBook width={30} height={30} />
            </Stack>
            <Stack>
              <Ins width={30} height={30} />
            </Stack>
            <Stack>
              <X width={30} height={30} />
            </Stack>
          </Box>
          <Box
            position={"absolute"}
            sx={{
              borderBottom: "2px solid #FFFFFF ",
              left: "390px",
              right: "370px",
            }}
          ></Box>
          <Stack
            display={"flex"}
            alignItems={"center"}
            paddingTop={5}
            sx={{ color: "#FFFFFF" }}
          >
            <Box>© 2024 Pinecone Foods LLC </Box>
            <Box>Зохиогчийн эрх хуулиар хамгаалагдсан.</Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
export default Footer;
