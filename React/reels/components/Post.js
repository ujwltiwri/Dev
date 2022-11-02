import React, { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Avatar } from "@mui/material";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
function Post({ postData, userData }) {
  const [heart, setHeart] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (postData.likes.includes(userData.uid)) {
      setLike(true); // true, means that user has already liked the post
    } else {
      setLike(false);
    }
  }, [postData]);

  const handleLike = async () => {
    if (like) {
      //means user has already liked the post -> remove uid from likes array
      await updateDoc(doc(db, "posts", postData.postId), {
        likes: arrayRemove(userData.uid),
      });
    } else {
      //means user hasn't liked the post -> so add uid into likes array
      await updateDoc(doc(db, "posts", postData.postId), {
        likes: arrayUnion(userData.uid),
      });
    }
  };

  return (
    <div className="post-container">
      <video controls src={postData.postURL} preload="none" />
      <div className="videos-info">
        <div className="avatar-container">
          <Avatar
            alt="avatar"
            src={postData.profilePhotoURL}
            sx={{ width: 35, height: 35 }}
          />
          <p style={{ color: "#fff", marginTop: ".5rem" }}>
            {postData.profileName}
          </p>
        </div>
        <div className="post-like">
          <div className="heart" onClick={handleLike}>
            {like == false ? (
              <FavoriteBorderOutlinedIcon
                // fontSize="large"
                color="disabled"
                sx={{
                  fontSize: "35px",
                  color: "#fff",
                  "&:hover": { color: "#BDBDBD" },
                }}
              />
            ) : (
              <FavoriteIcon
                // fontSize="large"
                sx={{
                  fontSize: "35px",
                  color: "red",
                }}
              />
            )}
          </div>
          <SendOutlinedIcon
            // fontSize="large"
            sx={{ color: "#fff", fontSize: "30px" }}
          />
          <p style={{ color: "#fff" }}>{postData.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
