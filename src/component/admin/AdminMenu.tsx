import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useFoodData } from "@/context/FoodContext";
import { MenuCard, CreateFood, ButtonMenu, CreateCategory } from "./index";

const AdminMenu = () => {
  const { foodData } = useFoodData();

  console.log("foodData:", foodData);

  const [menu, setMenu] = useState("Breakfast");

  const titleMenu = [
    "Breakfast",
    "Main Dish",
    "Salads and Appetizers",
    "Dessert",
  ];

  return (
    <Stack bgcolor={"#ECEDF0"} direction={"row"} gap={4}>
      {/* <Container sx={{ justifyContent: "space-between", display: "flex" }}> */}

      <Box bgcolor={"#FFFFFF"} pr={"260px"}>
        <Stack
          maxWidth={"402px"}
          py={"26px"}
          pl={"525px"}
          pr={"24px"}
          display={"flex"}
          justifyContent={"start"}
          bgcolor={"#FFFFFF"}
        >
          <Stack width={"258px"} gap={5}>
            <Box>
              <Typography variant="h5" color={"#272727"}>
                Food menu
              </Typography>
            </Box>
            <Stack gap={"26px"}>
              {titleMenu.map((e, index) => (
                <Stack
                  direction={"row"}
                  textAlign={"start"}
                  height={"40px"}
                  px={"16px"}
                  py={"8px"}
                  key={index}
                  justifyContent={"space-between"}
                  borderRadius={"8px"}
                  border={"1px solid #D6D8DB"}
                  sx={{
                    bgcolor: menu === e ? "#18BA51" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      width: "258px",
                      height: "40px",
                      color: menu === e ? "#FFFFFF" : "#000000",
                    }}
                    onClick={() => setMenu(e)}
                  >
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      variant="h6"
                    >
                      {e}
                    </Typography>
                  </Button>
                  <Stack>
                    <ButtonMenu />
                  </Stack>
                </Stack>
              ))}
              <Stack>
                <CreateCategory />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Stack py={6} width={"900px"} gap={3} flexWrap={"wrap"} direction={"row"}>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">{menu}</Typography>
          <CreateFood />
        </Stack>
        <Stack width={"900px"} gap={3} direction={"row"} flexWrap={"wrap"}>
          {" "}
          {foodData
            .filter((item) => item.category === menu)
            .map((data, index) => (
              <Stack key={index}>
                <MenuCard data={data} />
              </Stack>
            ))}
        </Stack>
      </Stack>

      {/* </Container> */}
    </Stack>
  );
};
export default AdminMenu;
