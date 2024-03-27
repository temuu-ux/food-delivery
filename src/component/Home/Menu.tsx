import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import * as React from "react";
import BoardCard from "../Card/BoardCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Menu = () => {
  const theme = useTheme();
  return (
    <Stack display={"flex"} gap={5}>
      <Container>
        <Stack gap={4}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h5" color={theme.palette.secondary.main}>
               Хямдралтай
            </Typography>
            <Button>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h4" textAlign={"center"}>
                  Бүгдийг харах
                </Typography>
                <ChevronRightIcon />
              </Stack>
            </Button>
          </Stack>

          <Stack>
            {" "}
            <BoardCard />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Menu;
