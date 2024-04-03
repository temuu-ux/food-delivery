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
      <Typography fontSize={"28px"} fontWeight={700} color={"#0D1118"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={2} width={"384px"}>
        <FormGroup>
          <FormControl>
            <Typography fontSize={"14px"}>И-мэйл </Typography>
            <TextField
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>

          <FormControl>
            <Typography fontSize={"14px"}>Нууц үг</Typography>
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
      <Stack width={"324px"} gap={4}>
        <Link href="/dash-home" underline="none">
          {" "}
          <Stack bgcolor={"#18BA51"} borderRadius={"4px"}>
            <Button>
              <Typography color={"white"}>Нэвтрэх</Typography>
            </Button>
          </Stack>
        </Link>
        <Typography textAlign={"center"}>Эсвэл</Typography>
        <Stack
          bgcolor={"#FFFFFF"}
          borderRadius={"4px"}
          border={"1px #18BA51 solid"}
        >
          <Link href={"/sign"}>
            {" "}
            <Button>
              <Typography color={"#272727"}>Бүртгүүлэх</Typography>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default LogIn;
