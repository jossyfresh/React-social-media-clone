import { Box, Typography, useTheme } from "@mui/material";
import Friend from "./Friend";
import Wrapper from "./Wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FriendList = () => {
  const dispatch = useDispatch();

  const mediumMain = "#A3A3A3";
  const medium = "#858585";
  const col = "#00D5FA";
  const following = [
    {
      userid: 1,
      username: "hello",
      imgurl: "https://picsum.photos/200/300",
    },
    {
      userid: 2,
      username: "world",
      imgurl: "https://picsum.photos/200/300",
    },
    {
      userid: 3,
      username: "no way",
      imgurl: "https://picsum.photos/200/300",
    },
  ];

  return (
    <Wrapper>
      <Typography
        color={medium}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}>
        Following
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {following.map((person) => (
          <Friend
            key={person.userid}
            name={person.username}
            userPicturePath={person.imgurl}
          />
        ))}
      </Box>
    </Wrapper>
  );
};

export default FriendList;
