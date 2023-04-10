import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import ProfilePic from "./ProfilePic";
import FlexBetween from "./FlexBetween";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";

const ShowProfile = () => {
  const [getuseinfo, setuserinfo] = useState([]);
  const curuser = useSelector((state) => state.SignIn.user);
  const { palette } = useTheme();
  const dark = "#000";
  const medium = "#6b7280";
  const main = "#1a202c";
  const userinfo = useSelector((state) => state.SignIn.user);
  const username = "username";
  const hello = "https://picsum.photos/200/200";
  const fname = "hello";
  const lname = "world";
  const uname = "hello_world";

  return (
    <Wrapper>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <ProfilePic src={hello} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: medium,
                  cursor: "pointer",
                },
              }}>
              {fname} {lname}
            </Typography>
            <Typography color={medium}>{uname}</Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{"unknown"}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{"student"}</Typography>
        </Box>
      </Box>

      <Divider />
      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>{"ppppppppp"}</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Instagram
              </Typography>
              <Typography color={medium}>{"pppppppppp"}</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>
    </Wrapper>
  );
};

export default ShowProfile;
