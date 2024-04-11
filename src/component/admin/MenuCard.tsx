import { Stack, Typography } from "@mui/material";
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

export const MenuCard = ({ data }: { data: FoodData }) => {
  return (
    <Stack py={"24px"}>
      <Stack>
        <Card
          sx={{
            maxWidth: 282,
            borderRadius: "16px",
            bgcolor: "#ECEDF0",
            border: "none",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ borderRadius: "16px", width: 282, height: 186 }}
              component="img"
              height="140"
              image={data.imagePath}
              alt={data.foodName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.foodName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
};
