import Feed from "./Feed";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase";
import { setPost } from "../redux/features/SignInSlice";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { async } from "@firebase/util";

const ShowFeed = () => {
  const [loading, setloading] = useState(false);
  const [re, setre] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.SignIn.posts);

  useEffect(() => {}, [posts]);
  return (
    <>
      {posts.data.map((post) => (
        <Feed
          username={post.username}
          userimgurl={post.userimg}
          imgurl={post.img}
          like={post.like}
          comment={post.Comment}
          description={post.description}
        />
      ))}
    </>
  );
};

export default ShowFeed;
