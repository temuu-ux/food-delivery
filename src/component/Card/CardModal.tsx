import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BoardCard from "./BoardCard";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface data {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  gap: 8,
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CardModal = ({ data }: { data: data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Box onClick={handleOpen}>
        <BoardCard data={data} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display={"flex"}>
          <CardMedia
            sx={{ width: "50%", height: "500px" }}
            component="img"
            image={data.imagePath}
            alt="green iguana"
          />
          <Stack gap={8}>
            <Stack>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {data.foodName}
              </Typography>
              <Typography>{data.price}</Typography>
            </Stack>
            <Stack>
              {" "}
              <Typography>Орц</Typography>
              <Typography>{data.ingredients}</Typography>
            </Stack>
            <Stack>
              <Typography>Too</Typography>
            </Stack>
            <Stack direction={"row"} gap={5}>
              <Button>
                <RemoveIcon />
              </Button>
              <Typography width={"154px"} textAlign={"center"}>
                0
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </Stack>
            <Button>Сагслах</Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
export default CardModal;
