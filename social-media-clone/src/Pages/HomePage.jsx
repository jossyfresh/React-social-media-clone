import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import CreatePost from "../component/CreatePost";
import ShowProfile from "../component/ShowProfile";
import FriendsList from "../component/FriendsList";
import Navbar from "./Navbar";
import Feed from "../component/Feed";
import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "../component/ShowFeeds";
const HomePage = ({ picturePath }) => {
  const photo = "https://picsum.photos/200/200";
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
        <Box flexBasis={isNonMobileScreens ? "40%" : undefined} mt="0.5rem">
          <CreatePost picturePath={photo} />
          <ShowFeed />
        </Box>

        <Box flexBasis="26%">
          <Box m="2rem 0" />
          <FriendsList />
        </Box>
      </Box>
    </Box>
  );
};
export default HomePage;
