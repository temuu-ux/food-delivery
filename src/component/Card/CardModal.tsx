import * as React from "react";
import BoardCard from "./BoardCard";
import { Stack, Box, Button, Typography } from "@mui/material";
import { Modal, CardMedia, useTheme } from "@mui/material";
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
  gap: 4,
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const CardModal = ({ data }: { data: data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [countBuy, setCountBuy] = React.useState(1);
  const addHandler = () => {
    setCountBuy(countBuy + 1);
  };
  const theme = useTheme();
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
        <Box sx={style} display={"flex"} borderRadius={4}>
          <CardMedia
            sx={{ width: "50%", height: "500px" }}
            component="img"
            image={data.imagePath}
            alt={data.foodName}
          />
          <Stack gap={4} width={"384px"}>
            <Stack>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 4, fontSize: theme.typography.subtitle2 }}
              >
                {data.foodName}
              </Typography>
              <Typography
                sx={{
                  fontSize: theme.typography.h6,
                  color: theme.palette.primary.main,
                }}
              >
                {data.price}
              </Typography>
            </Stack>
            <Stack gap={3}>
              {" "}
              <Typography sx={{ fontSize: theme.typography.h6 }}>
                Орц
              </Typography>
              <Typography
                height={"54px"}
                borderRadius={2}
                px={2}
                py={1}
                sx={{
                  color: theme.palette.secondary.dark,
                  backgroundColor: theme.palette.secondary.light,
                }}
              > {data.ingredients.map((e) => {
                  return e + "," + " ";
                })}
              </Typography>
            </Stack>
            <Stack>
              <Typography sx={{ fontSize: theme.typography.h6 }}>
                Too
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={5}>
              <Box
                width={"45px"}
                display={"flex"}
                height={"40px"}
                justifyContent={"center"}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.light,
                  borderRadius: "10px",
                }}
              >
                <Button
                  onClick={() => addHandler()}
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                >
                  <RemoveIcon />
                </Button>
              </Box>
              <Typography
                width={"254px"}
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {countBuy}
              </Typography>
              <Box
                width={"45px"}
                display={"flex"}
                height={"40px"}
                justifyContent={"center"}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.light,
                  borderRadius: "10px",
                }}
              >
                <Button
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Stack>
            <Box
              display={"flex"}
              justifyContent={"center"}
              borderRadius={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Button
                sx={{
                  color: theme.palette.primary.light,
                }}
              >
                Сагслах
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
export default CardModal;
