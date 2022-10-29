import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Avatar } from "@mui/material";
function Post({ postData }) {
  const [heart, setHeart] = useState(false);
  return (
    <div className="post-container">
      <video controls src={postData.postURL} />
      <div className="videos-info">
        <div className="avatar-container">
          <Avatar alt="avatar" src={postData.profilePhotoURL} sx={{width: 35, height: 35}} />
        </div>
        <div className="post-like">
          <div
            className="heart"
            onClick={() => setHeart(!heart)}
          >
            {heart == false ? (
              <FavoriteBorderOutlinedIcon
                fontSize="large"
                color="disabled"
                sx={{
                  color: "#222",
                  "&:hover": { color: "#BDBDBD" },
                }}
              />
            ) : (
              <FavoriteIcon
                fontSize="large"
                sx={{
                  color: "red",
                }}
              />
            )}
          </div>
          <SendOutlinedIcon fontSize="large" sx={{ color: "#222" }} />
          <p>{postData.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
