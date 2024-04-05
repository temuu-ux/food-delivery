import { Checkbox, Typography, CardMedia, Button } from "@mui/material";
import { Box, Container, Stack, useTheme } from "@mui/material";
import { OrderCard } from "./OrderCard";
import { useCartData } from "@/context/CartContext";

const Order = () => {
  const theme = useTheme();
  const { cartData } = useCartData();
  console.log("data", cartData);

  let sum = 0;
  cartData.forEach((num) => {
    sum += num.price * num.sale;
  });
  return (
    <Container>
      <Stack mt={18} mb={10} direction={"row"} justifyContent={"space-between"}>
        <OrderCard />
        <Stack width={"432px"}>
          <Stack direction={"row"} px={1} py={4} gap={4}>
            <Checkbox
              sx={{
                borderRadius: "9px",
                color: "#0468C8",
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
            <Box>
              <Typography color={"#8B8E95"} variant={"h4"}>
                Алхам 2
              </Typography>
              <Typography variant="caption" color={theme.palette.primary.dark}>
                Захиалга баталгаажуулах
              </Typography>
              <Typography
                fontSize="16px"
                fontStyle={"normal"}
                color={"#0468C8"}
              >
                Хүлээгдэж байна
              </Typography>
            </Box>
          </Stack>
          <Stack
            height={"674px"}
            p={3}
            gap={4}
            boxShadow={3}
            borderRadius={4}
            position={"relative"}
          >
            <Box overflow={"scroll"} height={"540px"}>
              {cartData.map((e, index) => (
                <Stack
                  py={4}
                  gap={2}
                  key={index}
                  direction={"row"}
                  borderTop={1}
                  borderBottom={1}
                  borderColor={"#D6D8DB"}
                >
                  <CardMedia
                    sx={{ height: 121, width: 184 }}
                    image={e.imagePath}
                    title={e.foodName}
                  />
                  <Stack width={184}>
                    <Typography variant="button" color={"#000000"}>
                      {e.foodName}
                    </Typography>
                    <Typography
                      color={theme.palette.primary.main}
                      variant="button"
                    >
                      {e.price}
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      fontWeight={"400"}
                      fontStyle={"normal"}
                      color={"#767676"}
                      display={"flex"}
                    >
                      {e.ingredients.map((e) => e + " " + ",")}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Box>

            <Stack
              direction={"row"}
              gap={7}
              justifyContent={"space-around"}
              position={"absolute"}
              bottom={30}
            >
              <Box>
                <Typography variant="caption" color={"#5E6166"}>
                  Нийт төлөх дүн
                </Typography>
                <Typography variant="h3" color={"#121316"}>
                  {sum}
                </Typography>
              </Box>
              <Stack
                bgcolor={theme.palette.primary.main}
                borderRadius={1}
                justifyContent={"center"}
              >
                <Button
                  sx={{
                    width: "187px",
                    height: "50px",
                    color: theme.palette.primary.light,
                  }}
                >
                  <Typography variant="h4" fontSize={"16px"}>
                    Захиалах
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Order;
