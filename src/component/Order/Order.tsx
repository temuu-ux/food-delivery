import {
  Box,
  Container,
  Stack,
  Checkbox,
  Typography,
  useTheme,
  TextField,
} from "@mui/material";
import { useCartData } from "@/context/CartContext";
import { OrderOption1, OrderOption2, OrderOption3 } from ".";

const Order = () => {
  const theme = useTheme();
  const { cartData } = useCartData();
  console.log("data", cartData);
  return (
    <Container>
      <Stack my={30} direction={"row"} justifyContent={"space-between"}>
        <Stack width={"432px"}>
          <Stack direction={"row"} px={6} py={4} gap={4}>
            <Checkbox
              sx={{
                borderRadius: 9,
                color: "#0468C8",
                "&.Mui-checked": {
                  color: "#0468C8",
                },
              }}
            />
            <Box>
              <Typography color={"#8B8E95"} variant={"h4"}>
                Алхам 1
              </Typography>
              <Typography variant="caption" color={theme.palette.primary.dark}>
                Хаягийн мэдээлэл оруулах
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
          <Stack p={6} gap={4} boxShadow={3} borderRadius={4}>
            <Stack gap={2}>
              <Typography variant="h4">Хаяг аа оруулна уу</Typography>
              <OrderOption1 />
              <OrderOption2 />
              <OrderOption3 />
            </Stack>
            <Stack gap={6}>
              <Box>
                <Typography variant="h4">Нэмэлт мэдээлэл</Typography>
                <TextField
                  id="filled-multiline-static"
                  //   label="Multiline"
                  fullWidth
                  multiline
                  rows={4}
                  // defaultValue="Default Value"
                  placeholder="Орц, давхар, орцны код ..."
                  variant="filled"
                />
              </Box>
              <Box>
                <Typography variant="h4">Утасны дугаар*</Typography>
                <TextField
                  id="filled-textarea"
                  //   label="Утасны дугаараа оруулна уу"
                  placeholder="Утасны дугаараа оруулна уу"
                  multiline
                  fullWidth
                  variant="filled"
                />
              </Box>
              <Box>
                <Typography>Төлбөр төлөх </Typography>
                <Stack direction={"row"} gap={10}>
                  <Stack alignItems={"center"} direction={"row"}>
                    <Checkbox
                      sx={{
                        color: "#161616",
                        "&.Mui-checked": {
                          color: "#161616",
                        },
                      }}
                    />
                    <Typography>Бэлнээр</Typography>
                  </Stack>
                  <Stack alignItems={"center"} direction={"row"}>
                    <Checkbox
                      sx={{
                        color: "#161616",
                        "&.Mui-checked": {
                          color: "#161616",
                        },
                      }}
                    />
                    <Typography>Картаар</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"432px"}>
          <Stack direction={"row"} px={6} py={4} gap={4}>
            <Checkbox
              sx={{
                borderRadius: 9,
                color: "#0468C8",
                "&.Mui-checked": {
                  color: "#0468C8",
                },
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
          <Stack p={6} gap={4} boxShadow={3} borderRadius={4}>
            {cartData.map((e, index) => (
              <Stack key={index}>{e.foodName}</Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Order;
