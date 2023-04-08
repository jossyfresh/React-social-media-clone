import { Feed } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const ShowFeed = ({ userId, isProfile = false }) => {
  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <Feed
            postId={_id}
            postUserId={userId}
            description={description}
            location={location}
            postPic={picturePath}
            profilePic={picturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default ShowFeed;
