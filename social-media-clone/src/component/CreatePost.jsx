import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import Dropzone from "react-dropzone";
import ProfilePic from "./ProfilePic";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { firestore } from "../firebase";
import { doc, setDoc, collection } from "@firebase/firestore";
import { async } from "@firebase/util";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase";
import { addPost } from "../redux/features/SignInSlice";

const CreatePost = ({ picturePath }) => {
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imgurl, setImgUrl] = useState(null);
  const [cap, setcap] = useState("");
  const dispatch = useDispatch();
  const currId = useSelector((state) => state.SignIn.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = "#A3A3A3";
  const medium = "#858585";
  const col = "#00D5FA";

  const post = (e) => {
    e.preventDefault();
    setIsImage(!isImage);
    const file = image;
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
    console.log(imgurl);
    const data = {
      description: cap,
      userimg: imgurl,
      img: imgurl,
      username: "user",
      like: [],
      comment: [],
    };
    const sendpost = async () => {
      const newpostref = doc(collection(firestore, "posts"));
      await setDoc(newpostref, data);
    };
    sendpost();
    dispatch(
      addPost({
        data,
      })
    );
  };

  return (
    <Wrapper>
      <FlexBetween gap="1.5rem">
        <ProfilePic image={picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          sx={{
            width: "100%",
            backgroundColor: col,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
          value={cap}
          onChange={(e) => setcap(e.target.value)}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${col}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}>
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween
          sx={{
            gap: "1rem",
            "&:hover": {
              cursor: "pointer",
              color: medium,
            },
          }}
          onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}>
            Image
          </Typography>
        </FlexBetween>
        <Button
          sx={{
            color: "#ffffff",
            backgroundColor: col,
            borderRadius: "3rem",
          }}
          onClick={post}>
          POST
        </Button>
      </FlexBetween>
    </Wrapper>
  );
};

export default CreatePost;
