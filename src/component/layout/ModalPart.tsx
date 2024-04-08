import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from "react";
import {
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const ModalPart = () => {
  const [isInputFilled, setIsInputFilled] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const emailHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsInputFilled(!!event.target.value && !!email);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsInputFilled(!!event.target.value && !!password);
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack gap={6}>
      <Stack gap={2}>
        <Stack>
          <Typography color={"#000000"} borderColor={"#ECEDF0"} sx={{ mt: 2 }}>
            Имэйл
          </Typography>
          <TextField
            sx={{ bgcolor: "#F7F7F8" }}
            placeholder="Имэйл хаягаа оруулна уу"
            autoComplete="current-password"
            variant="outlined"
            value={email}
            onChange={emailHandle}
          />
        </Stack>

        <Stack>
          <Typography color={"#000000"} id="modal-modal-description">
            Нууц үг
          </Typography>
          <OutlinedInput
            value={password}
            placeholder="Нууц үг"
            onChange={handlePassword}
            type={showPassword ? "text" : "password"}
            sx={{
              backgroundColor: "#F7F7F8",
              borderColor: "#ECEDF0",
            }}
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
        </Stack>
      </Stack>
    </Stack>
  );
};
