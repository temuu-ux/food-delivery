import { Stack, Container, Button, Box, Typography } from "@mui/material";
import CardModal from "./CardModal";
import { useState } from "react";
import FoodData from "../../utils/FoodData.json";

const AllCard = () => {
  const [menu, setMenu] = useState("Breakfast");
  const titleMenu = [
    "Main Dish",
    "Salads and Appetizers",
    "Breakfast",
    "Dessert",
  ];
  return (
    <Stack>
      <Container>
        {titleMenu.map((category, index) => {
          return (
            <Box key={index}>
              <Button
                onClick={() => setMenu(category)}
                sx={{ display: "flex", direction: "row" }}
              >
                <Typography>{category}</Typography>
              </Button>
            </Box>
          );
        })}
        <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
          {FoodData.filter((e) => e.category == menu).map((data, index) => (
            <CardModal data={data} key={index} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
export default AllCard;
