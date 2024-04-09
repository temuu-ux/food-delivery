import { MenuCard, FoodMenu } from "@/component/admin";
import { Box, Stack } from "@mui/material";
import { useFoodData } from "@/context/Context";
import { useState } from "react";

const Page = () => {
  const { foodData } = useFoodData();

  const [menu, setMenu] = useState("Breakfast");
  const titleMenu = [
    "Breakfast",
    "Main Dish",
    "Salads and Appetizers",
    "Dessert",
  ];

  return (
    <Stack bgcolor={"#ECEDF0"} direction={"row"} gap={2}>
      {/* <Container sx={{ justifyContent: "space-between", display: "flex" }}> */}

      <Box bgcolor={"#FFFFFF"} pr={"250px"}>
        <FoodMenu data={titleMenu} />
      </Box>
      <Box>
        {foodData.map((data, index) => (
          <MenuCard key={index} foodData={data} />
        ))}
      </Box>

      {/* </Container> */}
    </Stack>
  );
};
export default Page;
