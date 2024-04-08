import { Stack } from "@mui/material";
import Desktop from "./Desktop";
import Board from "./Board";
import Menu from "./Menu";

export const Home = () => {
  return (
    <Stack  gap={10}>
      <Desktop />
      <Board />
      <Stack gap={"80px"}>
        <Menu category="Sale" />
        <Menu category="Main Dish" />
        <Menu category="Salads and Appetizers" />
        <Menu category="Breakfast" />
        <Menu category="Dessert" />
      </Stack>
    </Stack>
  );
};
