// import React from "react";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import { BoardData } from "@/utils/HomeData";

const Board = () => {
  const theme = useTheme();
  return (
    <Container>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        {BoardData.map((item, index) => (
          <Stack
            key={index}
            gap={1}
            width={264}
            height={155}
            border="1px #D6D8DB solid"
            borderRadius={4}
            boxShadow={"4"}
          >
            <Stack
              display={"flex"}
              alignItems={"center"}
              m={4}
              width={"30px"}
              height={"30px"}
              sx={{
                backgroundImage: `${item.img}`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></Stack>
            <Stack px={2}>
              <Typography variant="h3" color={theme.palette.secondary.main}>
                {item.title}
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.secondary.main}
                sx={{ opacity: 0.5 }}
              >
                Захиалга бэлтгэлийн явцыг хянах
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default Board;
