import {
  Avatar,
  Box,
  ButtonGroup,
  Fab,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import MyAvatar from "../assets/pic.jpg";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
  CalendarMonth,
  EmojiEmotions,
  Image,
  OndemandVideo,
  PersonAdd,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 5px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={4}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={MyAvatar} sx={{ width: 30, height: 30 }} />
            <Typography variant="span" fontWeight={500}>
              Muhammad
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={6}>
            <EmojiEmotions color="warning" />
            <Image color="primary" />
            <OndemandVideo color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </React.Fragment>
  );
};
