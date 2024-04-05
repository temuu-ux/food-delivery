import {
  Box,
  Checkbox,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { OrderOption1, OrderOption2, OrderOption3 } from ".";

export const OrderCard = () => {
  const theme = useTheme();
  return (
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
            Алхам 1
          </Typography>
          <Typography variant="caption" color={theme.palette.primary.dark}>
            Хаягийн мэдээлэл оруулах
          </Typography>
          <Typography fontSize="16px" fontStyle={"normal"} color={"#0468C8"}>
            Хүлээгдэж байна
          </Typography>
        </Box>
      </Stack>
      <Stack p={"24px"} gap={5} boxShadow={3} borderRadius={4}>
        <Stack gap={2}>
          <Typography variant="h4">Хаяг аа оруулна уу</Typography>
          <OrderOption1 />
          <OrderOption2 />
          <OrderOption3 />
        </Stack>
        <Stack gap={4}>
          <Stack gap={"4px"}>
            <Typography variant="h4">Нэмэлт мэдээлэл</Typography>
            <TextField
              id="filled-multiline-static"
              fullWidth
              multiline
              rows={4}
              // defaultValue="Default Value"
              placeholder="Орц, давхар, орцны код ..."
              variant="outlined"
            />
          </Stack>
          <Stack gap={"4px"}>
            <Typography variant="h4">Утасны дугаар*</Typography>
            <TextField
              id="filled-textarea"
              label="Утасны дугаараа оруулна уу"
              placeholder="Утасны дугаараа оруулна уу"
              multiline
              fullWidth
              variant="outlined"
            />
          </Stack>
          <Box>
            <Typography>Төлбөр төлөх </Typography>
            <Stack direction={"row"} gap={4}>
              <Stack width={"175px"} alignItems={"center"} direction={"row"}>
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
              <Stack width={"175px"} alignItems={"center"} direction={"row"}>
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
  );
};
