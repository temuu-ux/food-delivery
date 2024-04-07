import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Profile } from "../icon/Pine";
import {
  IconButton,
  Link,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 448,
  height: 549,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

export const HeaderLogModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        <Profile width={18} height={18} />
        <Typography>Нэвтрэх</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack gap={6}>
            <Typography
              textAlign={"center"}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Нэвтрэх
            </Typography>
            <Box>
              <Stack>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Имэйл
                </Typography>
                <TextField
                  id="filled-password-input"
                  label="Имэйл хаягаа оруулна уу"
                  type="text"
                  autoComplete="current-password"
                  variant="outlined"
                />
              </Stack>

              <Stack>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Нууц үг
                </Typography>
                <OutlinedInput
                  sx={{
                    backgroundColor: "#F7F7F8",
                    borderColor: "#ECEDF0",
                    variant: "outlined",
                  }}
                  placeholder="Нууц үг"
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
              </Stack>
            </Box>
            <Stack gap={2}>
              <Link href="/dash-home" underline="none">
                <Stack
                  // bgcolor={isInputFilled ? "#18BA51" : "#EEEFF2"}
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
                      // color={isInputFilled ? "#fff" : "#1C20243D"}
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
        </Box>
      </Modal>
    </div>
  );
};
