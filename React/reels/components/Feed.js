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
import { db } from "../firebase";
import Navbar from "./Navbar";
import Post from "./Post";
import Upload from "./Upload";
export default function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
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

  return (
    <div className="feed-container">
      <Navbar userData={userData} />
      <Upload userData={userData} />
      {/* <Post postData={posts} /> */}
      <div className="videos-container">
        {posts.map((post, idx) => (
          <Post postData={post} userData={userData} key={idx} />
        ))}
      </div>
    </div>
  );
}
