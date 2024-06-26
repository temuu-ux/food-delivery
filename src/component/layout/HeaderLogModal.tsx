import { useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Profile } from "../icon/Pine";
import { Stack } from "@mui/material";
import { ModalPart } from "./ModalPart";
import { UserDropdown } from "./UserDropdown";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (chaName == "Нэвтрэх") {
      setOpen(true);
    }
    if (chaName == "Хэрэглэгч") {
      setOpen(false);
    }
  };
  // asuudal
  const handleClose = () => setOpen(false);
  const [chaName, setChaName] = useState("Нэвтрэх");
  const [isInputFilled, setIsInputFilled] = useState(false);

  const handleChange = () => {
    setChaName("Хэрэглэгч");
    handleClose();
    setIsInputFilled;
  };

  const fontStyle = {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "center",
  };
  const button = {
    borderRadius: "4px",
    alignItems: "center",
  };

  return (
    <Box>
      <Button onClick={handleOpen} sx={{ gap: 1 }}>
        <Profile width={18} height={18} />
        <Typography color={"#000000"} variant="subtitle1">
          {chaName == "Нэвтрэх" ? "Нэвтрэх" : <UserDropdown />}
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack gap={4}>
            <Typography
              textAlign={"center"}
              variant="h5"
              fontSize={"28px"}
              component="h2"
            >
              Нэвтрэх
            </Typography>
            <ModalPart />
            <Stack gap={2}>
              {/* <Link href="/dash-home" underline="none"> */}
              <Stack
                bgcolor={isInputFilled ? "#18BA51" : "#EEEFF2"}
                sx={button}
              >
                <Button
                  onClick={handleChange}
                  sx={{
                    height: "48px",
                    width: "384px",
                  }}
                >
                  <Typography
                    sx={fontStyle}
                    color={isInputFilled ? "#fff" : "#1C20243D"}
                  >
                    Нэвтрэх
                  </Typography>
                </Button>
              </Stack>
              {/* </Link> */}
              <Typography sx={fontStyle} fontSize={"14px"}>
                Эсвэл
              </Typography>
              <Stack
                bgcolor={"#FFFFFF"}
                sx={button}
                border={"1px #18BA51 solid"}
              >
                <Link href={"/sign"}>
                  <Button
                    sx={{
                      height: "48px",
                      width: "384px",
                    }}
                  >
                    <Typography sx={fontStyle} color={"#272727"}>
                      Бүртгүүлэх
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
