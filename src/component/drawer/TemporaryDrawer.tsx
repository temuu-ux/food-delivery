import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { CardMedia, Stack, Typography, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartData } from "@/context/CartContext";
export const TemporaryDrawer = () => {
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
  const [allprice, setAllprice] = useState(0);
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

  React.useEffect(() => {
    priceHandler();
  }, [cartData]);

  const priceHandler = () => {
    let totalPrice = 0;
    cartData.forEach((el) => {
      const price = el.price * el.count;
      totalPrice += price;
    });
    setAllprice(totalPrice);
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
      <Box
        px={4}
        pt={2}
        pb={5}
        height={"176px"}
        width={"600px"}
        sx={{
          boxShadow: 3,
          position: "fixed",
          bottom: "0px",
          backgroundColor: "white",
        }}
      >
        <Stack direction={"row"}>
          <Stack width={"256px"}>
            <Typography color={"#5E6166"} variant="caption">
              Нийт төлөх дүн
            </Typography>

            <Typography variant="h3" color={"#121316"}>
              {allprice}
            </Typography>
          </Stack>
          <Stack
            borderRadius={1}
            bgcolor={theme.palette.primary.main}
            justifyContent={"center"}
          >
            <Button
              sx={{
                width: "256px",
                color: theme.palette.primary.light,
              }}
            >
              Захиалах
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>
        <Typography variant="subtitle1">Сагс</Typography>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};
