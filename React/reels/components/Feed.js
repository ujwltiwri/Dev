import { useContext } from "react";
import { AuthContext } from "../context/auth";
import Navbar from "./Navbar";
import Upload from "./Upload";
export default function Feed() {
  const { user } = useContext(AuthContext);
  return (
    <div className="feed-container">
      <Navbar />
      <Upload />
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
