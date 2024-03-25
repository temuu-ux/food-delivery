// import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { BoardData } from "@/utils/HomeData";

const Board = () => {
  return (
    <Container>
      <Stack direction="column" spacing={2}>
        {BoardData.map((item, index) => (
          <Stack
            key={index} 
            width={264}
            height={155}
            border="1px #D6D8DB solid"
            borderRadius={15}
            boxShadow={10}
          >
            <Stack p={4}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Stack>
            <Stack px={2}>
              <Typography variant="h3" color="#272727">
                {item.title}
              </Typography>
              <Typography variant="h4" color="#272727" sx={{ opacity: 0.5 }}>
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
