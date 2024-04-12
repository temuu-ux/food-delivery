import { FormControl, FormGroup, Button, useTheme, Stack } from "@mui/material";
import { Typography, TextField, Link, IconButton } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isInputFilled, setIsInputFilled] = React.useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsInputFilled(!!e.target.value && !!password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsInputFilled(!!event.target.value && !!email);
  };

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
        Нэвтрэхsdcsdcs
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
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
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
          <Stack
            bgcolor={isInputFilled ? "#18BA51" : "#EEEFF2"}
            borderRadius={"4px"}
            alignItems={"center"}
          >
            <Button
              sx={{
                width: "384px",
                height: "48px",
              }}
            >
              <Typography
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={400}
                color={isInputFilled ? "#fff" : "#1C20243D"}
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
            <Button
              sx={{
                width: "384px",
                height: "48px",
              }}
            >
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
