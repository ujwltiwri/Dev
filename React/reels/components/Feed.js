import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { db } from "../Firebase";
import Navbar from "./Navbar";
import Upload from "./Upload";
export default function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      // console.log(doc.data());
      setUserData(doc.data());
    });

    return () => unsub();
  }, [user]);
  return (
    <div className="feed-container">
      <Navbar userData={userData} />
      <Upload userData={userData} />
      <div className="videos-container">
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
        <div className="post-container">
          <video controls />
        </div>
      </div>
    </div>
  );
}
