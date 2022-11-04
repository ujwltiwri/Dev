import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";

function DisplayComments({ postData }) {
  const [allComments, setAllComments] = useState(null);
  useEffect(() => {
    let tempArr = [];
    postData.comments.map(async (commentId) => {
      const docSnap = await getDoc(doc(db, "comments", commentId));
      tempArr.push(docSnap.data());
    });
    setAllComments(tempArr);
  }, []);
  console.log("allComments", allComments);
  return (
    <div
      className="per-comment"
      style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
    >
      {allComments === null ? (
        <CircularProgress />
      ) : (
        allComments.map((commentObj, idx) => {
          console.log("printing comments", commentObj);
          return (
            <div
              className="single-comment"
              style={{
                display: "flex",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <Avatar src={commentObj.userDP} />
              <p style={{ marginLeft: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {commentObj.userName}
                </span>
                &nbsp;
                {commentObj.text}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DisplayComments;
