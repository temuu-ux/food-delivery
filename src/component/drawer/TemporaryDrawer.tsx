import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const TemporaryDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 586 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack py={6} gap={10} px={6}>
        <Stack direction={"row"} gap={20}>
          <ArrowBackIosNewIcon />
          <Typography variant="body1">Таны сагс</Typography>
        </Stack>
        <Stack borderTop={"1px solid #D6D8DB "}>asd</Stack>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Сагс</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
