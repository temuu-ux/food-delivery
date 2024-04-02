import { Stack, Container, Button, Typography, useTheme } from "@mui/material";
import CardModal from "./CardModal";
import { useState } from "react";
// import FoodData from "../../utils/FoodData.json";
import { useFoodData } from "@/context/Context";

export const AllCard = () => {
  const { foodData } = useFoodData();
  const theme = useTheme();
  const [menu, setMenu] = useState("Breakfast");
  const titleMenu = [
    "Main Dish",
    "Salads and Appetizers",
    "Breakfast",
    "Dessert",
  ];

  // const buttonStyle = (category: string) => ({
  //   width: "280px",

  // });

  return (
    <Container>
      <Stack direction={"row"}>
        {titleMenu.map((category, index) => {
          return (
            <Stack
              my={"32px"}
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              key={index}
            >
              <Button
                sx={{
                  width: "280px",
                  hover: "none",
                  bgcolor:
                    menu === category
                      ? theme.palette.primary.main
                      : theme.palette.primary.light,
                  color:
                    menu === category
                      ? theme.palette.primary.light
                      : theme.palette.primary.dark,
                }}
                onClick={() => setMenu(category)}
              >
                <Typography>{category}</Typography>
              </Button>
            </Stack>
          );
        })}
      </Stack>
      <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
        {foodData
          .filter((e) => e.category == menu)
          .map((data, index) => (
            <CardModal data={data} key={index} />
          ))}
      </Stack>
    </Container>
  );
};
// export default AllCard;
