import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useAmp } from "next/amp";

const Board = () => {
  const theme = useTheme();
  return (
    <Container>
      <Stack
        width={264}
        height={155}
        border={"1px #D6D8DB solid"}
        borderRadius={"15px"}
        boxShadow={"10"}
      >
        <Stack p={4}>
          <Box
            width={"30px"}
            height={"30px"}
            sx={{
              backgroundImage: "url(/book.svg)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Stack>
        <Stack>
          <Typography variant="h3" color={"#272727"}>
            Хүргэлтийн төлөв хянах
          </Typography>
          <Typography variant="h4" color={"#272727"} sx={{ opacity: 0.5 }}>
            Захиалга бэлтгэлийн явцыг хянах
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Board;
