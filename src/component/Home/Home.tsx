import { Stack } from "@mui/material";
import Desktop from "./Desktop";
import Board from "./Board";
import Menu from "./Menu"

export const Home = () => {
  return (
    <Stack gap={10}>
      <Desktop />
      <Board />
      <Menu/>
    </Stack>
  );
};
