import { useState } from "react";
import { Typography, Button, Box, Modal, colors } from "@mui/material";
import { Stack, FormControl, OutlinedInput } from "@mui/material";
import { CustomSwitch } from "./Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Upload from "./Upload";
import ClearIcon from "@mui/icons-material/Clear";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "15px",
  border: "none",
};

export const CreateFood = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen} sx={{ width: "130px" }}>
        <Typography variant="h4">Add new food</Typography>
      </Button>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            gap={15}
            borderBottom={"1px solid #E0E0E0"}
            direction={"row"}
            alignItems={"center"}
            py={"16px"}
            px={2}
          >
            <Button sx={{ color: "black" }} onClick={handleClose}>
              <ClearIcon />
            </Button>

            <Typography
              variant="h5"
              fontSize={"24px"}
              id="modal-modal-title"
              component="h2"
            >
              Create food
            </Typography>
          </Stack>

          <Stack borderBottom={"1px solid #E0E0E0"} p={"24px"} gap={2}>
            <Stack gap={1}>
              {" "}
              <Typography variant="h4">Хоолны нэр</Typography>
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </Stack>
            <Stack gap={1}>
              {" "}
              <Typography variant="h4">Хоолны ангилал</Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Breakfast</MenuItem>
                  <MenuItem value={20}>Soup</MenuItem>
                  <MenuItem value={30}>Main course</MenuItem>
                  <MenuItem value={40}>Desserts</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack gap={1}>
              {" "}
              <Typography variant="h4">Хоолны орц</Typography>
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </Stack>
            <Stack gap={1}>
              {" "}
              <Typography variant="h4">Хоолны үнэ</Typography>
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </Stack>
            <Stack gap={1}>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                {" "}
                <CustomSwitch />
                <Typography variant="h4">Хямдралтай эсэх</Typography>
              </Stack>

              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </Stack>
            <Stack gap={1}>
              {" "}
              <Typography variant="h4">Хоолны зураг</Typography>
              <Upload />
            </Stack>
          </Stack>
          <Stack p={3} gap={2} justifyContent={"flex-end"} direction={"row"}>
            <Button>Clear</Button>
            <Button>Continue</Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
