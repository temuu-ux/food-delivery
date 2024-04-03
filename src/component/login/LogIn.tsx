import {
  Typography,
  TextField,
  IconButton,
  Stack,
  OutlinedInput,
  FormControl,
  FormGroup,
  Link,
  Button,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = useTheme();
  return (
    <Stack
      p={4}
      mt={2}
      width={"450px"}
      height={"720px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={6}
    >
      <Typography fontSize={"27px"} fontWeight={700} color={"#0D1118"}>
        Нэвтрэх
      </Typography>
      <Stack gap={4} width={"384px"}>
        <FormGroup sx={{ gap: 2 }}>
          <FormControl sx={{ gap: 1 }}>
            <Typography color={theme.palette.primary.dark} variant="h4">
              И-мэйл
            </Typography>
            <TextField
              sx={{
                fontSize: "16px",
                fontStyle: "normal",
                fontFamily: 200,
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>

          <FormControl sx={{ gap: 1 }}>
            <Typography color={theme.palette.primary.dark} variant="h4">
              Нууц үг
            </Typography>
            <OutlinedInput
              sx={{
                backgroundColor: "#F7F7F8",
                borderColor: "#ECEDF0",
              }}
              placeholder="Нууц үгээ оруулна уу"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
        </FormGroup>
      </Stack>
      <Stack width={"384px"} gap={4}>
        <Link href="/dash-home" underline="none">
          <Stack bgcolor={"#18BA51"} borderRadius={"4px"}>
            <Button>
              <Typography
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={400}
                color={"white"}
              >
                Нэвтрэх
              </Typography>
            </Button>
          </Stack>
        </Link>
        <Typography
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={400}
          textAlign={"center"}
        >
          Эсвэл
        </Typography>
        <Stack
          bgcolor={"#FFFFFF"}
          borderRadius={"4px"}
          border={"1px #18BA51 solid"}
          textAlign={"center"}
        >
          <Link href={"/sign"}>
            <Button>
              <Typography
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={400}
                color={"#272727"}
              >
                Бүртгүүлэх
              </Typography>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default LogIn;
