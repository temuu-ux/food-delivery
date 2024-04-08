import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Link } from "@mui/material";
import { UserProfile } from "../user/UserProfile";

export const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const push = [
    {
      title: "Profile",
      com: <UserProfile />,
    },
    {
      title: "My account",
      com: <UserProfile />,
    },
    {
      title: "Logout",
      com: <UserProfile />,
    },
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Хэрэглэгч
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {push.map((e, index) => {
          return (
            <Link key={index} href={"/user/userprofile"}>
              {" "}
              <MenuItem onClick={handleClose}>{e.title}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    </Box>
  );
};
