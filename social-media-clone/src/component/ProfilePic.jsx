import { Box } from "@mui/material";

const ProfilePic = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://picsum.photos/id/200/300`}
      />
    </Box>
  );
};

export default ProfilePic;
