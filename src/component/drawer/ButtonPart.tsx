import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useCartData } from "@/context/CartContext";
import Link from "next/link";

export const ButtonPart = () => {
  const theme = useTheme();
  const { cartData } = useCartData();
  let sum = 0;
  cartData.forEach((num) => {
    sum += num.price * num.sale;
  });
  // const [allprice, setAllprice] = useState(0);
  // React.useEffect(() => {
  //   priceHandler();
  // }, [cartData]);

  // const priceHandler = () => {
  //   let totalPrice = 0;
  //   cartData.forEach((el) => {
  //     const price = el.price * el.count;
  //     totalPrice += price;
  //   });
  //   setAllprice(totalPrice);
  // };
  return (
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
            {sum}
          </Typography>
        </Stack>
        <Link href={"/orderpage"}>
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
        </Link>
      </Stack>
    </Box>
  );
};
