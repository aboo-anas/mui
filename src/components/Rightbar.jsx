import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import MyAvatar from "../assets/pic.jpg";

export const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography fontWeight={100} variant="h6">
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
          <Avatar alt="Travis Howard" src={MyAvatar} />
        </AvatarGroup>
        <Typography fontWeight={100} variant="h6" mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={MyAvatar} alt="My Avatar" />
          </ImageListItem>
          <ImageListItem>
            <img src={MyAvatar} alt="My Avatar" />
          </ImageListItem>
          <ImageListItem>
            <img src={MyAvatar} alt="My Avatar" />
          </ImageListItem>
          <ImageListItem>
            <img src={MyAvatar} alt="My Avatar" />
          </ImageListItem>
        </ImageList>
        <Typography fontWeight={100} variant="h6" mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
