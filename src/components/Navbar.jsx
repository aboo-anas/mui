import { Mail, Notifications, Pets } from "@mui/icons-material";
import MyAvatar from "../assets/pic.jpg";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0, 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FACE ISLAM
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase
            placeholder="Type here to search..."
            autoFocus={true}
            sx={{ width: "100%" }}
          ></InputBase>
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Notifications />
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Pic"
            src={MyAvatar}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Pic"
            src={MyAvatar}
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToobar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
