import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ProfilePic({ src }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={src} sx={{ width: 56, height: 56 }} />
    </Stack>
  );
}
