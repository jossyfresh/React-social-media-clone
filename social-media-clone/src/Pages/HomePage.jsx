import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import CreatePost from "../component/CreatePost";
import ShowProfile from "../component/ShowProfile";
import Navbar from "./Navbar";
import Feed from "../component/Feed";

const HomePage = ({ picturePath }) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between">
        <Box flexBasis="26%">
          <ShowProfile picturePath={picturePath} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "40%" : undefined} mt="2rem">
          <CreatePost picturePath={picturePath} />
          <Feed userPicturePath={picturePath} />
        </Box>
        <Box flexBasis="26%">
          <Box m="2rem 0" />
        </Box>
      </Box>
    </Box>
  );
};
export default HomePage;
