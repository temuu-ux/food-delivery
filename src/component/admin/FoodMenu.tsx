import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ButtonMenu } from "./ButtonMenu";

export const FoodMenu = ({ data }: { data: String[] }) => {
  return (
    <Stack
      maxWidth={"402px"}
      py={"26px"}
      pl={"525px"}
      pr={"24px"}
      display={"flex"}
      justifyContent={"start"}
      bgcolor={"#FFFFFF"}
    >
      <Stack width={"258px"} gap={5}>
        <Box>
          <Typography variant="h5" color={"#272727"}>
            Food menu
          </Typography>
        </Box>
        <Stack gap={"26px"}>
          {data.map((e, index) => (
            <Stack
              direction={"row"}
              textAlign={"start"}
              px={"16px"}
              py={"8px"}
              width={"258px"}
              key={index}
              justifyContent={"space-between"}
              borderRadius={"8px"}
              border={"1px solid #D6D8DB"}
            >
              <Button sx={{ width: "258px" }}>
                <Typography display={"flex"} alignItems={"center"} variant="h6">
                  {e}
                </Typography>
              </Button>

              <Stack>
                <ButtonMenu />
              </Stack>
            </Stack>
          ))}
          <Stack>
            <Button
              sx={{
                width: "258px",
                justifyContent: "start",
                borderRadius: "8px",
                border: "1px solid #D6D8DB",
              }}
            >
              <Typography color={"#5E6166"}>
                <AddIcon />
                Create new category
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
