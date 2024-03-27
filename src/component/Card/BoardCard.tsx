import * as React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const BoardCard = () => {
  const theme = useTheme();
  return (
    <Stack>
      <Card sx={{ maxWidth: 282, boxShadow: "inherit" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="282"
            height="140"
            image="/pizza.jpeg"
            alt="pizza"
            sx={{ border: "none" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Өглөөний хоол
            </Typography>
            <Typography variant="h6" color={theme.palette.primary.main}>
              160000
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
};
export default BoardCard;
