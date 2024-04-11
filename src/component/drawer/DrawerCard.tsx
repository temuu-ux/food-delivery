import * as React from "react";
import { useState } from "react";
import { Box, Drawer, Button } from "@mui/material";
import { CardMedia, Stack, Typography, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartData } from "@/context/CartContext";
import { ButtonPart } from "./ButtonPart";
import Badge from "@mui/material/Badge";
import { Cart } from "../icon/Pine";
// import { useOrderData } from "@/context/OrderContext";

export const DrawerCard = () => {
  // const { orderData, setOrderData } = useOrderData();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [countBuy, setCountBuy] = useState(1);
  const addHandler = () => {
    setCountBuy(countBuy + 1);
  };
  const minusHandler = () => {
    const count = countBuy - 1;
    count < 1 ? setCountBuy(1) : setCountBuy(count);
  };
  const { cartData } = useCartData();
  const box = {
    width: "40px",
    display: "flex",
    height: "40px",
    justifyContent: "center",
    backgroundColor: "#18BA51",
    color: "#FFFFFF",
    borderRadius: "10px",
  };
  const DrawerList = (
    <Box sx={{ width: 586 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack py={6} gap={10} px={6} p={4}>
        <Stack gap={22} direction={"row"}>
          <ArrowBackIosNewIcon />
          <Typography variant="button">Таны сагс</Typography>
        </Stack>
        <Stack gap={4} sx={{ marginBottom: "150px" }}>
          {cartData.map((data, index) => {
            return (
              <Stack
                boxShadow={3}
                borderTop={1}
                borderBottom={1}
                borderColor={"#D6D8DB"}
                width={"538px"}
                gap={4}
                py={4}
                px={5}
                key={index}
                direction={"row"}
              >
                <Stack>
                  {" "}
                  <CardMedia
                    component="img"
                    width={245}
                    image={data.imagePath}
                    alt={data.foodName}
                    sx={{
                      height: "150px",
                      borderRadius: "16px",
                      width: "245px",
                    }}
                  />
                </Stack>
                <Stack>
                  <Typography
                    color={theme.palette.primary.dark}
                    variant="body2"
                  >
                    {data.foodName}
                  </Typography>
                  <Typography
                    color={theme.palette.primary.main}
                    variant="body2"
                  >
                    {data.sale > 0
                      ? data.price - (data.price * data.sale) / 100
                      : data.price}
                  </Typography>
                  <Typography variant="h4" color={theme.palette.secondary.dark}>
                    {data.ingredients.map((e) => e + " " + ",")}
                  </Typography>
                  <Stack py={1} direction={"row"} gap={3}>
                    <Box sx={box}>
                      {" "}
                      <Button
                        onClick={minusHandler}
                        sx={{
                          color: theme.palette.primary.light,
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                    </Box>
                    <Typography
                      textAlign={"center"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      variant="h4"
                    >
                      {data.count}
                    </Typography>
                    <Box sx={box}>
                      {" "}
                      <Button
                        onClick={() => addHandler()}
                        sx={{
                          color: theme.palette.primary.light,
                        }}
                      >
                        <AddIcon />
                      </Button>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <ButtonPart />
    </Box>
  );
  return (
    <Box>
      <Button sx={{ gap: 1 }} onClick={toggleDrawer(true)}>
        <Badge badgeContent={cartData.length} color="primary">
          <Cart width={24} height={24} />
        </Badge>
        <Typography color={"#000000"} variant="subtitle1">
          Сагс
        </Typography>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};
