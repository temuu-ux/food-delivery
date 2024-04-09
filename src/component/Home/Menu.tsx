import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import CardModal from "../Card/CardModal";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useFoodData } from "@/context/Context";

const Menu = ({ category }: { category: string }) => {
  const theme = useTheme();
  const { foodData } = useFoodData();
  // console.log("foodData", foodData);
  // console.log("category", category);

  return (
    <Stack display={"flex"} gap={5}>
      <Container sx={{ justifyContent: "space-between" }}>
        <Stack gap={4} justifyContent={"space-between"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h5" color={theme.palette.secondary.main}>
              {category}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link href={"/all-card-menu"}>
                <Button>
                  <Typography variant="h4" textAlign={"center"}>
                    Бүгдийг харах
                  </Typography>
                </Button>
              </Link>

              <ChevronRightIcon />
            </Stack>
          </Stack>

          {category === "Sale" ? (
            <Stack direction={"row"} gap={3}>
              {" "}
              {foodData
                .filter((e) => e.sale > 0)
                .slice(0, 4)
                .map((data, index) => (
                  <CardModal key={index} data={data} />
                ))}
            </Stack>
          ) : (
            <Stack direction={"row"} gap={3}>
              {" "}
              {foodData
                .filter((e) => e.category == category)
                .filter((e) => e.sale == 0)
                .slice(0, 4)
                .map((data, index) => (
                  <CardModal key={index} data={data} />
                ))}
            </Stack>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};
export default Menu;
