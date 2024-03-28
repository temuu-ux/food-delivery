import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

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

const BoardCard = ({ data }: { data: data }) => {
  // console.log("data", data);

  // const theme = useTheme();
  return (
    <Card sx={{ width: 282, boxShadow: 0 }}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          width="282"
          image={data.imagePath}
          alt={data.foodName}
          sx={{ height: "160px", borderRadius: "16px" }}
        />
        {data.sale > 0 ? (
          <Box
            p="4px 16px"
            borderRadius={"16px"}
            bgcolor={"#18BA51"}
            position={"absolute"}
            top={"15px"}
            right={"15px"}
            border={1}
            borderColor={"white"}
          >
            <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
              {data.sale + "%"}
            </Typography>
          </Box>
        ) : (
          <Stack></Stack>
        )}

        <CardContent sx={{ pt: "14px", px: 0, pb: 0 }}>
          <Typography fontWeight={600} textAlign={"start"} fontSize={18}>
            {data.foodName}
          </Typography>
          {data.sale > 0 ? (
            <Stack direction={"row"} gap={2}>
              <Typography fontSize={"18px"} color={"#18BA51"} fontWeight={600}>
                {data.price - (data.price * data.sale) / 100}₮
              </Typography>
              <Typography
                fontSize={"18px"}
                sx={{ textDecoration: "line-through" }}
              >
                {data.price}₮
              </Typography>
            </Stack>
          ) : (
            <Typography
              textAlign={"start"}
              fontSize={"18px"}
              color={"#18BA51"}
              fontWeight={600}
            >
              {data.price}₮
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default BoardCard;
