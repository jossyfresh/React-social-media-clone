import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import ProfilePic from "./ProfilePic";

const Friend = ({ userPicturePath, username }) => {
  const main = "#00D5FA";
  const medium = "#666666";
  const subtitle = "subtitle";
  const isFollowing = true;
  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <ProfilePic src={userPicturePath} size={"50px"} />
        <Box>
          <Typography
            color={main}
            variant="h6"
            fontWeight="400"
            sx={{
              "&:hover": {
                color: main,
                cursor: "pointer",
              },
            }}>
            {username}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            subtitle
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        sx={{ backgroundColor: medium, p: "0.6rem" }}
        onClick={() => {}}>
        {isFollowing ? (
          <PersonRemoveOutlined sx={{ color: main }} />
        ) : (
          <PersonAddOutlined sx={{ color: main }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
