import { Stack, Container, Typography, Box, useTheme } from "@mui/material";

const Desktop = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      width="full"
      height={"788px"}
      sx={{ backgroundImage: "url(/green.png)" }}
      mt={11}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          justifyContent={"center"}
          alignItems={"start"}
          py={40}
          width={384}
          gap={4}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{ color: theme.palette.primary.light }}
            >
              Pinecone Food delivery
            </Typography>
          </Box>
          <Box
            border={1}
            borderColor={"#FFF"}
            width={384}
            sx={{ opacity: 0.5 }}
          ></Box>
          <Box>
            <Typography
              variant="h2"
              sx={{ color: theme.palette.primary.light }}
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"start"}
          position={"relative"}
        >
          <Box
            sx={{
              backgroundImage: "url(/tsuivan.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
            width={500}
            height={500}
          ></Box>
          <Box
            position={"absolute"}
            bottom={170}
            left={345}
            width={300}
            height={300}
            zIndex={1}
            sx={{
              backgroundImage: "url(/huurga.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Desktop;
