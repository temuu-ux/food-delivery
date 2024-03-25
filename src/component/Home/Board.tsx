import { Box, Container, Stack } from "@mui/material";

const Board = () => {
  return (
    <Container>
      <Stack
        width={264}
        height={155}
        border={"1px #D6D8DB solid"}
        borderRadius={"15px"}
        boxShadow={"10"}
        p={"8px"}
      >
        <Stack>
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
      </Stack>
    </Container>
  );
};
export default Board;
