import { Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
interface FoodData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

export const MenuCard = ({ foodData }: { foodData: FoodData }) => {
  return (
    <Stack width={"894px"} py={"24px"}>
      <Stack gap={4}>
        {" "}
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5">{foodData.category}</Typography>
          <Button sx={{ width: "130px" }}>
            <Typography variant="h4">Add new food</Typography>
          </Button>
        </Stack>
        <Stack>
          <Card sx={{ maxWidth: 282 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={foodData.imagePath}
                alt={foodData.foodName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {foodData.foodName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {foodData.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};
