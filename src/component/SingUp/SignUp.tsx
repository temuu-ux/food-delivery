import { Stack, Checkbox, OutlinedInput, FormControl } from "@mui/material";
import { Typography, TextField, IconButton } from "@mui/material";
import { FormGroup, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [inputFilled, setInputFilled] = React.useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setInputFilled(!!e.target.value && !!name);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setInputFilled(!!event.target.value && !!email);
  };
  const handleAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setInputFilled(!!event.target.value && !!address);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setInputFilled(!!event.target.value && !!password);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      mt={10}
      width={"450px"}
      height={"720px"}
      alignItems={"center"}
      gap={6}
    >
      <Typography fontSize={"28px"} fontWeight={700} color={"#0D1118"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={2} width={"384px"}>
        <FormGroup sx={{ gap: 1 }}>
          <FormControl sx={{ gap: 1 }}>
            <Typography variant="h4">Нэр</Typography>
            <TextField
              value={name}
              onChange={handleNameChange}
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Нэрээ оруулна уу"
            />
          </FormControl>
          <FormControl>
            <Typography variant="h4">И-мэйл </Typography>
            <TextField
              value={email}
              onChange={handleEmail}
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>
          <FormControl sx={{ gap: 1 }}>
            <Typography variant="h4">Хаяг</Typography>
            <TextField
              value={address}
              onChange={handleAdress}
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Та хаягаа оруулна уу"
            />
          </FormControl>
          <FormControl sx={{ gap: 1 }}>
            <Typography variant="h4">Нууц үг</Typography>
            <OutlinedInput
              value={password}
              onChange={handlePassword}
              sx={{
                backgroundColor: "#F7F7F8",
                borderColor: "#ECEDF0",
              }}
              placeholder="Нууц үгээ оруулна уу"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
          <FormControl sx={{ gap: 1 }}>
            <Typography variant="h4">Нууц үг давтах</Typography>
            <OutlinedInput
              sx={{
                backgroundColor: "#F7F7F8",
                borderColor: "#ECEDF0",
              }}
              placeholder="Нууц үгээ оруулна уу"
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
      <Stack p={4} gap={4}>
        <Stack direction={"row"} pr={4} py={2} gap={2} alignItems={"center"}>
          <Checkbox
            sx={{
              color: "#161616",
              "&.Mui-checked": {
                color: "#161616",
              },
            }}
          />
          <Typography variant="h4">Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
        </Stack>
        <Stack
          borderRadius={1}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={inputFilled ? "#18BA51" : "#1C20243D"}
        >
          <Button sx={{ height: "48px", width: "384px", cursor: "pointer" }}>
            <Typography
              color={inputFilled ? "#FFFFFF" : "#1C20243D"}
              variant="caption"
            >
              Бүртгүүлэх
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
