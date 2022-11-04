import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Card, Typography } from "@mui/material";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import Dialog from "@mui/material/Dialog";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import DisplayComments from "./DisplayComments";

function Post({ postData, userData }) {
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

  //handle dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                color="disabled"
                sx={{
                  fontSize: "30px",
                  color: "#fff",
                  "&:hover": { color: "#BDBDBD" },
                }}
              />
            ) : (
              <FavoriteIcon
                sx={{
                  fontSize: "30px",
                  color: "red",
                }}
              />
            )}
          </div>
          <p style={{ color: "#fff" }}>{postData.likes.length}</p>
          <MapsUgcOutlinedIcon
            sx={{
              fontSize: "30px",
              color: "white",
              marginTop: "7px",
              "&:hover": { color: "#BDBDBD" },
            }}
            onClick={handleClickOpen}
            //Open Dialog When Clicked on Comment Icon
          />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="md"
          >
            <div className="modal-container">
              <div className="video-modal">
                <video src={postData.postURL} controls />
              </div>
              <div className="comments-modal">
                <Card sx={{ height: "100%" }}>
                  <div className="card-1">
                    <DisplayComments postData={postData} />
                  </div>
                  <div
                    className="card-2"
                    style={{
                      borderTop: " 1px solid #EFEFEF",
                      padding: "10px",
                    }}
                  >
                    {like == false ? (
                      <FavoriteBorderOutlinedIcon
                        color="disabled"
                        sx={{
                          fontSize: "30px",
                          color: "#222",
                          "&:hover": { color: "#BDBDBD" },
                        }}
                        onClick={handleLike}
                      />
                    ) : (
                      <FavoriteIcon
                        sx={{
                          fontSize: "30px",
                          color: "red",
                        }}
                        onClick={handleLike}
                      />
                    )}
                    <MapsUgcOutlinedIcon
                      sx={{
                        fontSize: "30px",
                        marginLeft: "5px",
                        "&:hover": { color: "#BDBDBD" },
                      }}
                    />
                    <Typography sx={{ marginBottom: "5px", fontSize: "14px" }}>
                      {postData.likes.length === 0
                        ? "Be The First One to Like This Post"
                        : `Liked By ${postData.likes.length} Users`}
                    </Typography>
                    <Comment userData={userData} postData={postData} />
                  </div>
                </Card>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Post;
