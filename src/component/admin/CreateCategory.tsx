import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Stack, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

export const CreateCategory = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        onClick={handleOpen}
        sx={{
          width: "258px",
          justifyContent: "start",
          borderRadius: "8px",
          border: "1px solid #D6D8DB",
        }}
      >
        <Typography color={"#5E6166"} display={"flex"} alignItems={"center"}>
          <AddIcon />
          Create new category
        </Typography>
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              borderBottom={"1px solid #E0E0E0"}
              px={6}
              py={4}
              id="transition-modal-title"
              variant="h5"
              fontSize={"24px"}
              component="h2"
            >
              Create new category
            </Typography>
            <Stack p={"24px"} gap={1}>
              <Typography
                variant="h4"
                id="transition-modal-description"
                sx={{ mt: 2 }}
              >
                Category name
              </Typography>

              <TextField
                id="outlined-basic"
                label="Placeholder"
                variant="outlined"
              />
            </Stack>
            <Stack>
              <Button></Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
