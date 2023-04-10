import {
  ChatBubbleOutlineOutlined,
  Collections,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import Friend from "./Friend";
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Feed = ({ username, userimgurl, imgurl, like, comment, description }) => {
  const [isComments, setIsComments] = useState(false);
  const isLiked = false;
  const userPicturePath = true;
  const { palette } = useTheme();
  const dark = "#000";
  const medium = "#6b7280";
  const main = "#1a202c";
  const primary = "#1a202c";

  const likeit = () => {
    console.log("like");
  };
  const sentcomment = () => {
    console.log("comment");
  };

  const commentBox = () => {
    return (
      <Box>
        <form>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <textarea
              id="chat"
              rows={1}
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
              defaultValue={""}
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </Box>
    );
  };

  return (
    <Wrapper m="1rem 1rem">
      <Friend userPicturePath={userimgurl} username={username} />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {userPicturePath && (
        <img
          width="500"
          height="500"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={imgurl}
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
            <Typography>{0}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography> {0} </Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comment.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
          {commentBox()}
        </Box>
      )}
    </Wrapper>
  );
};
export default Feed;
