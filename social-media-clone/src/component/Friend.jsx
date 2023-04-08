import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import ProfilePic from "./ProfilePic";

const Friend = ({ userPicturePath }) => {
  const isFriend = false;
  const main = "#00D5FA";
  const medium = "#666666";
  const name = "name";

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <ProfilePic image={userPicturePath} size="55px" />
        <Box>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: main,
                cursor: "pointer",
              },
            }}>
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            subtitle
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        sx={{ backgroundColor: medium, p: "0.6rem" }}
        onClick={() => {}}>
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: main }} />
        ) : (
          <PersonAddOutlined sx={{ color: main }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
