import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import Friend from "./Friend";
import Wrapper from "./Wrapper";
import { useState } from "react";

const Feed = ({ postid, userid, imageurl, like, comment, description }) => {
  const [isComments, setIsComments] = useState(false);
  const comments = ["", ""];
  const isLiked = true;
  const likeCount = 10;
  const main = "#A3A3A3";
  const primary = "#00D5FA";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Al";
  return (
    <Wrapper m="2rem 0">
      <Friend userPicturePath={userPicturePath} />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {userPicturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src="https://picsum.photos/200/150"
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography> {10} </Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </Wrapper>
  );
};

export default Feed;
