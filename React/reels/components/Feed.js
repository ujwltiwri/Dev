import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { userAgent } from "next/server";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { db } from "../Firebase";
import Navbar from "./Navbar";
import Upload from "./Upload";
export default function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      // console.log(doc.data());
      setUserData(doc.data());
    });

    return () => unsub(); //works like component will mount -> So When u r unmounting then Unsubscribe to the api calls
  }, [user]);

  //get posts from db -> works as CDM
  useEffect(() => {
    const getData = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (doc) => {
        let tempArray = [];
        doc.docs.map((userData) => tempArray.push(userData.data()));
        setPosts([...tempArray]);
      }
    );
  }, []);

  console.log(posts);

  return (
    <div className="feed-container">
      <Navbar userData={userData} />
      <Upload userData={userData} />
      <div className="videos-container">
        <div className="post-container">
          <video
            controls
            src="https://firebasestorage.googleapis.com/v0/b/reels-cc151.appspot.com/o/TjiDPptHBVQcrlseEYNFDDIihtS2%2Fpost%2F095355f7-5a3b-4e35-971b-51189ab394dc?alt=media&token=e1c5d2b0-32a1-469d-adbe-10a30d0b7ab1"
          />
        </div>
        <div className="post-container">
          <video controls />
        </div>
        <div className="post-container">
          <video controls />
        </div>
        <div className="post-container">
          <video controls />
        </div>
        <div className="post-container">
          <video controls />
        </div>
        <div className="post-container">
          <video controls />
        </div>
        <div className="post-container">
          <video controls />
        </div>
      </div>
    </div>
  );
}
