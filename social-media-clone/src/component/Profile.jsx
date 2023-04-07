import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../Pages/Navbar";
import CreatePost from "./CreatePost";
import UserWidget from "./UserWidget";
import Friend from "./Friend";

const ProfilePage = ({ picturePath }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center">
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget
            picturePath={picturePath}
            sx={{
              backgroundColor: "red",
            }}
          />
          <Box m="2rem 0" />
          <Friend
            userPicturePath={picturePath}
            sx={{
              backgroundColor: "blue",
            }}
          />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}>
          <CreatePost picturePath={picturePath} />
          <Box m="2rem 0" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
